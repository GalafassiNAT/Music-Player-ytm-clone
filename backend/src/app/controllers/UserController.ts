import { DAOManager } from "../daos/DAOManager";
import { AppError } from "../errors/AppError";	
import { Request, Response } from "express";
import { UserDTO } from "../dtos/UserDTO";
import { User } from "../models/User";


export class UserController{

	static async create(req: Request, res: Response){
		const userDAO = DAOManager.getInstance().userDAO;

		if(!req.body) throw new AppError("No information provided to create user");
		const DTO = req.body as UserDTO;
		const user = await userDAO.create(DTO);

		if(!user) throw new AppError("User with this email already exists.");
		res.json(user);
	}

	static async updateByID(req: Request, res: Response){
		const userDAO = DAOManager.getInstance().userDAO;
		
		const DTO = req.body as UserDTO;
		const updatedUser = await userDAO.update({id: req.params.id}, DTO);
		if(!updatedUser) throw new AppError("No information provided to update user");
		
		res.json(updatedUser);
	}

	static async  updateByEmail(req: Request, res: Response){
		const userDAO = DAOManager.getInstance().userDAO;
		const DTO = req.body as UserDTO;
		const updatedUser = await userDAO.update({email: req.params.email}, DTO);
		if(!updatedUser) throw new AppError("No information provided to update user");
		
		res.json(updatedUser);
	}

	static async deleteByParam(req: Request, res: Response){
		const userDAO = DAOManager.getInstance().userDAO;
		const deletedUser = await userDAO.delete(req.params);
		res.json(deletedUser);
	}

	static async getByParam(req: Request, res: Response, param: string){
		const userDAO = DAOManager.getInstance().userDAO;
		const user = await userDAO.get(req.params[param]);
		if(!user) throw new AppError("User not found");
		
		res.json(user);
	}

	static async getAll(){
		const userDAO = DAOManager.getInstance().userDAO;
		const users = await userDAO.getAll();
		if(!users) throw new AppError("No users found");
		
		return users;
	}
	
	static async getAllWhere(req: Request, res: Response, condition: Partial<User>){
		const userDAO = DAOManager.getInstance().userDAO;
		
		const users = await userDAO.getAllWhere(condition);
		if(!users || users.length === 0) throw new AppError("No users found");
		
		res.json(users);
	}

}