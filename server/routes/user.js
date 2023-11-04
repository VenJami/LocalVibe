const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  userDetails,
  getAllUsers,
  followUnfollowUser,
} = require("../controllers/user");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/registration").post(createUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

router.route("/users").get(isAuthenticatedUser, getAllUsers);

router.route("/add-user").put(isAuthenticatedUser, followUnfollowUser);

router.route("/me").get(isAuthenticatedUser, userDetails);

module.exports = router;
