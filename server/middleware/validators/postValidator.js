import { body, check, checkSchema } from "express-validator";

export const createAndUpdatePostValidator = () => {
  return [
    body("caption", "Please add a caption to your post").notEmpty(),
    body("selectedFile", "Please add a photo to your post").notEmpty(),
    body("tags", "Please add tags to your post").custom(
      (value) => value.length > 0
    ),
  ];
};
