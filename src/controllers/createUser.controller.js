import createUserService from "../services/createUser.service";

const createUserController = (req, res) => {
  const { email, name, password, isAdm } = req.body;

  const user = createUserService(email, name, password, isAdm);

  return res.json(user);
};

export default createUserController;
