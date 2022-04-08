import loginService from "../services/login/login.service";

export default class LoginController {
  loger(req, res) {
    const { email, password } = req.body;

    const userLogin = loginService(email, password);

    return res.status(401).json(userLogin);
  }
}
