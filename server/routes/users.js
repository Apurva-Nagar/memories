import express from "express";
import { signUp, signIn, signOut, getXSRFToken } from "../controllers/users.js";
import { validate } from "../middleware/validators/validate.js";
import {
  signinValidator,
  signupValidator,
} from "../middleware/validators/authValidator.js";

const router = express.Router();

router.post("/signup", signupValidator(), validate, signUp);
router.post("/signin", signinValidator(), validate, signIn);
router.delete("/signout", signOut);
router.get("/xsrf", getXSRFToken);

export default router;
