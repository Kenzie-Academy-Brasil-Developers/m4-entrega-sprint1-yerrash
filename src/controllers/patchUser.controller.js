import patchUserService from "../services/patchUser.service";

const patchUserController = (req, res) => {
  const { id } = req.params;
  const { email, name, password } = req.body;

  const patchedUser = patchUserService(id, email, name, password);

  return res.json(patchedUser);
};

export default patchUserController;
