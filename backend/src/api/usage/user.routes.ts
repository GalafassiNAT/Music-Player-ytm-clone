import { Router } from "express";
import { UserController } from "../../app/controllers/UserController";

const userRoutes = Router();

const controller = new UserController();

userRoutes.post("/", controller.create);


export { userRoutes };