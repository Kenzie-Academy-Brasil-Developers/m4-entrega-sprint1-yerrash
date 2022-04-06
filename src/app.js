import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Rendering!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

/* 
Endpoints
    POST /users = criação de usuário
    POST /login = gera um token recebendo email e password
    GET /users = lista todos os usuários
    GET /users/profile = retorna os dados do usuário logado
    PATCH /users/:id = atualiza os dados de um usuário
    DELETE /users/:id = deleta usuários do banco
*/
