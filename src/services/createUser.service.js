import users from "../database";
import { v4 as uuidv4 } from "uuid";

const createUserService = (email, name, password, isAdm) => {
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return "Email address already registered;";
  }

  const newUser = {
    email,
    name,
    password,
    isAdm,
    // createdOn,
    // updatedOn,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
