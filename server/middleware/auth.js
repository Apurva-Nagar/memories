import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isOAuthToken = token.length < 500 ? false : true;
    let decodedToken = null;

    if (isOAuthToken) {
      decodedToken = jwt.decode(token);
      req.userId = decodedToken?.sub;
    } else {
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      req.userId = decodedToken?.id;
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

export default auth;
