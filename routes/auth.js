const express = require("express");
const { googleAuth, signin, signup, signout } = require("../controllers/auth.js");

const router = express.Router();

//CREATE A USER
router.post("/signup", signup);

//SIGN IN
router.post("/signin", signin);

router.post("/signout", signout);

//GOOGLE AUTH
router.post("/google", googleAuth);

module.exports = router;
