const quizzes = require('../models/QuizSchema');

async function POST(req, res) {
    const { quizTitle, icon, quizQuestions } = await req.json();
    const newQuiz = await quizzes.create({ quizTitle, icon, quizQuestions });
  
    try {
      return res.json({
        id: newQuiz._id,
        message: 'The quiz has been created successfully.',
      });
    } catch (error) {
      return res.json({ message: error });
    }
}
  
async function GET(req, res) {
    try {
        const q = await quizzes.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
  
async function PUT(req, res) {
    try {
      const id = req.nextUrl.searchParams.get('id');
      let quizToUpdate = await quizzes.findById(id);
  
      const { updateQuiz, updateQuizQuestions } = await req.json();
      // Update properties of quizToUpdate
      if (updateQuiz) {
        quizToUpdate.icon = updateQuiz.icon;
        quizToUpdate.quizTitle = updateQuiz.quizTitle;
        quizToUpdate.quizQuestions = updateQuiz.quizQuestions;
      }
  
      if (updateQuizQuestions) {
        quizToUpdate.quizQuestions = updateQuizQuestions;
      }
  
      await quizToUpdate.save();
      return res.json({ message: 'success' });
    } catch (error) {
      console.log(error);
    }
}
  
async function DELETE(req, res) {
    const id = req.nextUrl.searchParams.get('id');
    await quizzes.findByIdAndDelete(id);
    return res.json({ message: 'quiz deleted' });
}

module.exports = {
    POST,
    GET,
    PUT,
    DELETE,
};
