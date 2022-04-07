import express from "express";
import createUserController from "./controllers/createUser.controller";
import listUsersController from "./controllers/listUsers.controller";
import patchUserController from "./controllers/patchUser.controller";

const app = express();
app.use(express.json());
const port = 3000;

app.post("/users", createUserController);

app.get("/users", listUsersController);

app.patch("/users/:id", patchUserController);

app.get("/", (req, res) => {
  res.send("Rendering!");
});

app.listen(port);

/* 
Endpoints
    POST /login = gera um token recebendo email e password
    GET /users/profile = retorna os dados do usuário logado
    PATCH /users/:id = atualiza os dados de um usuário
    DELETE /users/:id = deleta usuários do banco
*/
