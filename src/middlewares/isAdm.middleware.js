import { users } from "../database";
import jwt from "jsonwebtoken";

const isAdmMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  const decodedEmail = jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    return decoded.email;
  });

  const user = users.find((e) => e.email === decodedEmail);

  const isAdm = user.isAdm;

  if (isAdm) {
    return next();
  }

  if (req.params.id === user.id) {
    return next();
  }

  return res.status(401).json({ message: "Unauthorized" });
};

export default isAdmMiddleware;
