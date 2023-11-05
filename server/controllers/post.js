const Post = require("../models/PostModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");


// create post
exports.createPost = catchAsyncErrors(async (req, res, next) => {
  try {
    const { image } = req.body;

    let myCloud;

    if (image) {
      myCloud = await cloudinary.v2.uploader.upload(image, {
        folder: "posts",
      });
    }

    let replies = req.body.replies.map((item) => {
      if (item.image) {
        const replyImage = cloudinary.v2.uploader.upload(item.image, {
          folder: "posts",
        });
        item.image = {
          public_id: replyImage.public_id,
          url: replyImage.secure_url,
        };
      }
      return item;
    });

    const post = new Post({
      title: req.body.title,
      image: image
        ? {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          }
        : null,
      user: req.body.user,
      replies,
    });

    await post.save();

    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// get all posts
exports.getAllPosts = catchAsyncErrors(async (req, res, next) => {
  try {
    const posts = await Post.find().sort({
      createdAt: -1,
    });

    res.status(201).json({ success: true, posts });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});