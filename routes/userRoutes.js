const express = require("express");
const {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
  getAllUsers,
  deleteUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
  getUser,
  googleAuth,
} = require("../controllers/userControllers.js");
//const { adminGuard, authGuard } = require("../middleware/authMiddleware");
const { verifyToken } = require("../verifyToken.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/signin/google", googleAuth);
router.get("/profile", verifyToken, /*authGuard,*/ userProfile);
router.put("/sub/:id", verifyToken, subscribe);
router.put("/unsub/:id", verifyToken, unsubscribe);
router.put("/like/:videoId", verifyToken, like);
router.put("/dislike/:videoId", verifyToken, dislike);
router.put("/updateProfile/:userId", verifyToken, /*authGuard,*/ updateProfile);
router.put("/updateProfilePicture", verifyToken, /*authGuard,*/ updateProfilePicture);
router.get("/", /*verifyToken, authGuard, adminGuard,*/ getAllUsers);
router.delete("/:userId", verifyToken /*, authGuard, adminGuard, */, deleteUser);
router.get("/find/:id", getUser);

module.exports = router;
