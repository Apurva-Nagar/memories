import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
import { validate } from "../middleware/validators/validate.js";
import { createAndUpdatePostValidator } from "../middleware/validators/postValidator.js";
import paginateResults from "../middleware/paginateResults.js";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

router.get("/", auth, paginateResults(PostMessage), getPosts);
router.post("/", auth, createAndUpdatePostValidator(), validate, createPost);
router.patch(
  "/:id",
  auth,
  createAndUpdatePostValidator(),
  validate,
  updatePost
);
router.delete("/:id", auth, deletePost);
router.patch("/:id/like-post", auth, likePost);

export default router;
