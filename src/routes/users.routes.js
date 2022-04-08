import { Router } from "express";
import UserController from "../controllers/users.controller";
import authMiddleware from "../middlewares/auth.middleware";
import emailVerifierMiddleware from "../middlewares/emailVerifier.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";

const userRouter = Router();
const userController = new UserController();

userRouter.post("", emailVerifierMiddleware, userController.creator);
userRouter.get("", authMiddleware, isAdmMiddleware, userController.lister);
userRouter.get("/profile", authMiddleware, userController.profiler);
userRouter.patch(
  "/:id",
  authMiddleware,
  isAdmMiddleware,
  userController.patcher
);
userRouter.delete(
  "/:id",
  authMiddleware,
  isAdmMiddleware,
  userController.delete
);

export default userRouter;
