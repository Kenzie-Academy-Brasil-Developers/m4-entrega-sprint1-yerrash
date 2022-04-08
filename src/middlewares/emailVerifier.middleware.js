import { users } from "../database";

const emailVerifierMiddleware = (req, res, next) => {
  const { email } = req.body;

  const user = users.find((user) => user.email === email);

  if (user) {
    return res.status(400).json({
      message: "E-mail already registered",
    });
  }

  next();
};

export default emailVerifierMiddleware;
