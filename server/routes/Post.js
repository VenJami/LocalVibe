const express = require("express");
const {
  createPost,
  getAllPosts,
  updateLikes,
  addReplies,
  updateReplyLikes,
  addReply,
  updateRepliesReplyLike,
  deletePost,
} = require("../controllers/post");

const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/create-post").post(isAuthenticatedUser, createPost);

router.route("/get-all-posts").get(isAuthenticatedUser, getAllPosts);


module.exports = router;