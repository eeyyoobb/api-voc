const express = require('express');
const {
  addVideo,
  updateVideo,
  deleteVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend
} = require('../controllers/videoController.js');
const { verifyToken } = require('../verifyToken.js');

const router = express.Router();

// Create a video
router.post("/", verifyToken, addVideo);

// Update a video
router.put("/:id", verifyToken, updateVideo);

// Delete a video
router.delete("/:id", verifyToken, deleteVideo);

// Get a specific video by ID
router.get("/find/:id", getVideo);

// Increase view count for a video
router.put("/view/:id", addView);

// Get trending videos
router.get("/trend", trend);

// Get random videos
router.get("/random", random);

// Get subscribed videos (assuming this is related to user subscriptions)
router.get("/sub", verifyToken, sub);

// Get videos by tags
router.get("/tags", getByTag);

// Search for videos
router.get("/search", search);

module.exports = router;
