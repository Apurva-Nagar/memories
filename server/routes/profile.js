import express from "express";
import auth from "../middleware/auth.js";
import { getProfile } from "../controllers/profile.js";

const router = express.Router();

// ADD auth middleware
router.get("/:userId", getProfile);

export default router;
