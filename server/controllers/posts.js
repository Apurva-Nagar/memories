import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  res.status(200).json(res.results);
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ errors: [err.message] });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { caption, creator, selectedFile, tags, likes, name } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ errors: ["Failed to edit post."] });
  }

  const updatedPost = {
    caption,
    creator,
    name,
    selectedFile,
    tags,
    likes,
    _id: id,
  };

  try {
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ errors: [err.message] });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ errors: ["Failed to delete post."] });
  }

  try {
    await PostMessage.findByIdAndRemove(id);
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(404).json({ errors: [err.message] });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ errors: ["Failed to like post."] });
  }

  try {
    const post = await PostMessage.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ errors: [err.message] });
  }
};
