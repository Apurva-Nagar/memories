import bcrypt from "bcrypt";
import User from "../models/user.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    req.session.user = { id: newUser._id, name, email };
    return res
      .status(200)
      .json({ message: "Registration Successful!", user: req.session.user });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User doesn't exsist." });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password." });
    }

    req.session.user = { id: existingUser._id, name: existingUser.name, email };
    return res
      .status(200)
      .json({ message: "Sign in successful!", user: req.session.user });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const signOut = (req, res) => {
  if (!req.session.user) {
    return res.status(400).json({ message: "User is not signed in." });
  }
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json({ message: "Sign out successful!" });
  });
};

export const getXSRFToken = (req, res) => {
  return res.status(200).json({ xsrfToken: req.csrfToken() });
};
