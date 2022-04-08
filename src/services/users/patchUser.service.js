import { users } from "../../database";

const patchUserService = (id, email, name, password) => {
  const patchedUser = {
    email,
    name,
    password,
    updatedOn: new Date(),
  };

  const userIndex = users.findIndex((e) => e.id === id);

  if (userIndex === -1) {
    return "User not found.";
  }

  users[userIndex] = { ...users[userIndex], ...patchedUser };

  return users[userIndex];
};

export default patchUserService;
