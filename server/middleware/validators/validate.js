import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const validationError = validationResult(req);
  if (validationError.isEmpty()) {
    return next();
  }
  const errors = validationError.errors.map((error) => error.msg);
  return res.status(422).json({ errors: errors });
};
