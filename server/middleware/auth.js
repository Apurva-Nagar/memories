import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.decode(token);
      req.userId = decodedToken?.sub;
      next();
    } else if (req.session.user) {
      req.userId = req.session.user.id;
      next();
    } else {
      return res.status(401).json({ message: "Not authenticated" });
    }
  } catch (err) {
    console.log(err);
  }
};

export default auth;
