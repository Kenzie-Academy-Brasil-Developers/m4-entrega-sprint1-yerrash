import { users } from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async ({ email, name, password, isAdm = false }) => {
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

  const { createdOn, updatedOn, id } = newUser;

  const output = { email, name, isAdm, createdOn, updatedOn, id };

  return output;
};

export default createUserService;
