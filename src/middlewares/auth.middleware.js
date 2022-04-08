import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ status: "error", message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token" });
    }

    next();
  });
};

export default authMiddleware;
