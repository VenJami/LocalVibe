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

const router = express.Router();

router.route("/create-post").post(createPost);


module.exports = router;