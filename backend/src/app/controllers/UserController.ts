import { UserDAO } from "../daos/UserDAO";
import { User } from "../models/User";
import { Request, Response } from "express";


export class UserController{

	static async create(req: Request, res: Response){
		const userDAO = new UserDAO();
		const user = await userDAO.create(req.body);
		res.json(user);
	}

	static async updateByID(req: Request, res: Response){
		const userDAO = new UserDAO();
		const user = await userDAO.update(req.params, req.body);
		res.json(user);
	}

}