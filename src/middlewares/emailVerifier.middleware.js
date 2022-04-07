import users from "../database";

const emailVerifierMiddleware = (req, res, next) => {
  const { email } = req.body;

  const user = users.find((user) => user.email === email);

  if (user) {
    return res
      .status(401)
      .json({ status: "error", message: "Email address already in use" });
  }

  next();
};

export default emailVerifierMiddleware;
