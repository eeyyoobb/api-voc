const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { config } = require('dotenv');
const path = require('path');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/userRoutes.js');
const postRoutes = require('./routes/postRoutes.js');
const commentRoutes = require('./routes/commentRoutes.js');
const postCategoriesRoutes = require('./routes/postCategoriesRoutes.js');
const quizRoutes = require('./routes/quizroute.js');
const quizzesRoutes = require('./routes/Quizzesroute.js');
const bodyParser = require('body-parser');
const { errorResponserHandler, invalidPathHandler } = require('./middleware/errorHandler.js');
const videoRoutes = require('./routes/videoRoutes.js');
const bookRoutes = require('./routes/book-routes.js');
const authRoutes = require('./routes/auth.js');
const commentvideo = require('./routes/commenvideo.js');
const cookieParser = require('cookie-parser');

config();
const app = express();

// Middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/commentube', commentvideo);
app.use('/api/post-categories', postCategoriesRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/quizzes', quizzesRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/books', bookRoutes);

// Error handling middleware
app.use(invalidPathHandler);
app.use(errorResponserHandler);

// Static assets
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Default route
app.get('/', (req, res) => {
  res.json('Welcome to the API');
});

// Start the server
const port = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Database connection error:', error.message);
  });
