import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import patchUserService from "../services/users/patchUser.service";
import userLoginService from "../services/users/userLogin.service";

export default class UserController {
  async creator(req, res) {
    const { email, name, password, isAdm } = req.body;

    const user = await createUserService({ email, name, password, isAdm });

    return res.status(201).json(user);
  }

  loger(req, res) {
    const { email, password } = req.body;

    const userLogin = userLoginService(email, password);

    return res.json(userLogin);
  }

  lister(req, res) {
    const users = listUsersService();

    return res.json(users);
  }

  profiler(req, res) {
    return res;
  }

  patcher(req, res) {
    const { id } = req.params;
    const { email, name, password } = req.body;

    const patchedUser = patchUserService(id, email, name, password);

    return res.json(patchedUser);
  }

  delete(req, res) {
    const { id } = req.params;

    const deletedUser = deleteUserService(id);

    return res.json(deletedUser);
  }
}
