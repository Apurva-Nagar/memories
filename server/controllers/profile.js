import mongoose from "mongoose";
import User from "../models/user.js";
import PostMessage from "../models/postMessage.js";

export const getProfile = async (req, res) => {
  const { username } = req.params;

  try {
    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
      return res.status(400).json({ errors: ["User doesn't exsist."] });
    }

    const userPosts = await PostMessage.find({ creator: existingUser._id });

    res.status(200).json({
      profile_details: {
        name: existingUser.name,
        username: existingUser.username,
      },
      posts: userPosts,
    });
  } catch (err) {
    res.status(404).json({ errors: [err.message] });
  }
};
