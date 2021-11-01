import bcrypt from "bcrypt";
import User from "../models/user.js";

export const signUp = async (req, res) => {
  const { name, email, password, username } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        errors: ["User already exists"],
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      username,
    });

    req.session.user = { id: newUser._id, name: name, username: username };
    return res
      .status(200)
      .json({ message: "Registration Successful!", user: req.session.user });
  } catch (err) {
    return res.status(500).json({ errors: [err.message] });
  }
};

export const signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(400).json({ errors: ["User doesn't exsist."] });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword) {
      return res.status(400).json({ errors: ["Invalid password."] });
    }

    req.session.user = {
      id: existingUser._id,
      name: existingUser.name,
      username: existingUser.username,
    };
    return res
      .status(200)
      .json({ message: "Sign in successful!", user: req.session.user });
  } catch (err) {
    return res.status(500).json({ errors: [err.message] });
  }
};

export const signOut = (req, res) => {
  if (!req.session.user) {
    return res.status(400).json({ errors: ["User is not signed in."] });
  }
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ errors: [err.message] });
    return res.status(200).json({ message: "Sign out successful!" });
  });
};

export const getXSRFToken = (req, res) => {
  return res.status(200).json({ xsrfToken: req.csrfToken() });
};
