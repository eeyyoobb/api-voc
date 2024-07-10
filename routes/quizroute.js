const express = require("express");
const router = express.Router();

/** Import controllers */
const controller = require("../controllers/quizControllers.js");

/** Questions Routes API */
router.route('/questions')
  .get(controller.getQuestions) /** GET Request */
  .post(controller.insertQuestions) /** POST Request */
  .delete(controller.dropQuestions) /** DELETE Request */

/** Result Routes API */
router.route('/result')
  .get(controller.getResults)
  .post(controller.storeResult)
  .delete(controller.dropResults)

module.exports = router;
