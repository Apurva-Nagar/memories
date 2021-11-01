import express from "express";
import auth from "../middleware/auth.js";
import { getProfile } from "../controllers/profile.js";

const router = express.Router();

// ADD auth middleware
router.get("/:username", getProfile);

export default router;
