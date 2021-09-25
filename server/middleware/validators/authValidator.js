import { body } from "express-validator";

export const signinValidator = () => {
  return [body("email", "Please enter a valid email").isEmail()];
};

export const signupValidator = () => {
  return [
    body("name", "Please enter a proper name").matches(/^[a-zA-Z ]*$/),
    body("email", "Please enter a valid email").isEmail(),
    body(
      "password",
      "Invalid Password: 1 Uppercase, 1 Lowercase, 1 Special Charater and min. 8 char long."
    ).isStrongPassword(),
  ];
};
