import mongoose from "mongoose";
import User from "../models/user.js";
import PostMessage from "../models/postMessage.js";

export const getProfile = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ errors: ["Invalid user id"] });
  }

  try {
    const existingUser = await User.findOne({ _id: userId });
    if (!existingUser) {
      return res.status(400).json({ errors: ["User doesn't exsist."] });
    }

    const userPosts = await PostMessage.find({ creator: userId });

    console.log(existingUser);

    res
      .status(200)
      .json({ profile_details: { name: existingUser.name }, posts: userPosts });
  } catch (err) {
    res.status(404).json({ errors: [err.message] });
  }
};
