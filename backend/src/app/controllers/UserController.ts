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
		const user: User = {id: req.params.id, ...req.body};
		const updatedUser = await userDAO.update({id: req.params.id}, req.body);
		res.json(updatedUser);
	}

}