import { users } from "../../database";
import jwt from "jsonwebtoken";

const userProfileService = (userToken) => {
  const token = userToken.headers.authorization.split(" ")[1];

  const decodedEmail = jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    return decoded.email;
  });

  const user = users.find((e) => e.email === decodedEmail);

  return user;
};

export default userProfileService;
