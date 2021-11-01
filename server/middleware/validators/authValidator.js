import { body } from "express-validator";

export const signinValidator = () => {
  return [
    body(
      "username",
      "Please enter a valid username (only lowecase letters, numbers and underscore)"
    ).matches(/^[a-z0-9_]+$/),
    body(
      "username",
      "Username should be min. 3 and max 8 letters long"
    ).isLength({ min: 3, max: 12 }),
  ];
};

export const signupValidator = () => {
  return [
    body("name", "Please enter a proper name").matches(/^[a-zA-Z ]*$/),
    body("email", "Please enter a valid email id").isEmail(),
    body(
      "username",
      "Please enter a valid username (only lowecase letters, numbers and underscore)"
    ).matches(/^[a-z0-9_]+$/),
    body(
      "username",
      "Username should be min. 3 and max 8 letters long"
    ).isLength({ min: 3, max: 12 }),
    body(
      "password",
      "Invalid Password: 1 Uppercase, 1 Lowercase, 1 Special Charater and min. 8 char long."
    ).isStrongPassword(),
  ];
};
