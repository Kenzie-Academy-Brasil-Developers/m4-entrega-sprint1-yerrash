import express from "express";
import { response } from "express";
import createUserService from "./services/createUser.service";

const app = express();
const port = 3000;

app.post("/users", (req, res) => {
  const { email, name, password, isAdm } = request.body;

  const user = createUserService(email, name, password, isAdm);

  return response.json(user);
});

app.get("/", (req, res) => {
  res.send("Rendering!");
});

app.listen(port);

/* 
Endpoints
    POST /users = criação de usuário
    POST /login = gera um token recebendo email e password
    GET /users = lista todos os usuários
    GET /users/profile = retorna os dados do usuário logado
    PATCH /users/:id = atualiza os dados de um usuário
    DELETE /users/:id = deleta usuários do banco
*/
