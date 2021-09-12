import express from "express";
import { signUp, signIn, signOut } from "../controllers/users.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.delete("/signout", signOut);

export default router;
