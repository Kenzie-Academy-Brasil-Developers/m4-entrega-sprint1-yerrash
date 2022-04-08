import { users } from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async ({ email, name, password, isAdm }) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = {
    email,
    name,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
