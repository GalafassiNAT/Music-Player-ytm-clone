import { Router } from "express";
import { userRoutes } from "./usage/user.routes.ts";
const testRoute = Router();


testRoute.use("/user", userRoutes);


export { testRoute };