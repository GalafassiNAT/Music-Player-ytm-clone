import { UserDAO } from "../daos/UserDAO";
import { Request, Response } from "express";


export class UserController{

	static async create(req: Request, res: Response){
		const userDAO = new UserDAO();
		const user = await userDAO.create(req.body);
		res.json(user);
	}

}