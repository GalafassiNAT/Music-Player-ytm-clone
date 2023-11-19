import { UserDAO } from "../daos/UserDAO";
import { User } from "../models/User";
import { AppError } from "../errors/AppError";	
import { Request, Response } from "express";
import { UserDTO } from "../dtos/UserDTO";


export class UserController{

	static async create(req: Request, res: Response){
		const userDAO = new UserDAO();

		if(!req.body) throw new AppError("No information provided to create user");
		const DTO = req.body as UserDTO;
		const user = await userDAO.create(DTO);
		res.json(user);
	}

	static async updateByID(req: Request, res: Response){
		const userDAO = new UserDAO();
		
		
		const DTO = req.body as UserDTO;
		const updatedUser = await userDAO.update({id: req.params.id}, DTO);
		if(!updatedUser) throw new AppError("No information provided to update user");
		
		res.json(updatedUser);
	}

	static async  updateByEmail(req: Request, res: Response){
		const userDAO = new UserDAO();
		const DTO = req.body as UserDTO;
		const updatedUser = await userDAO.update({email: req.params.email}, DTO);
		if(!updatedUser) throw new AppError("No information provided to update user");
		
		res.json(updatedUser);
	}

	static async deleteByID(req: Request, res: Response){
		const userDAO = new UserDAO();
		const deletedUser = userDAO.delete({id: req.params.id});
		if(!deletedUser) throw new AppError("No information provided to delete user");
		
		res.json(deletedUser);
	}

	static async deleteByEmail(req: Request, res: Response){
		const userDAO = new UserDAO();
		const deletedUser = userDAO.delete({email: req.params.email});
		if(!deletedUser) throw new AppError("No information provided to delete user");
		
		res.json(deletedUser);
	}

	static async getByID(req: Request, res: Response){
		const userDAO = new UserDAO();
		const user = await userDAO.get(req.params.id);
		if(!user) throw new AppError("User not found");
		
		res.json(user);
	}

	static async getByEmail(req: Request, res: Response){
		const userDAO = new UserDAO();
		const user = await userDAO.get(req.params.email);
		if(!user) throw new AppError("User not found");
		const userDTO = new UserDTO(user.userName, user.email, user.password, user.about, user.dateOfBirth, user.createdAt, user.updatedAt, user.profilePicture);
		
		res.json(userDTO);
	}

	static async getAll(){
		const userDAO = new UserDAO();
		const users = await userDAO.getAll();
		if(!users) throw new AppError("No users found");
		
		return users;
	}
	
	static async getAllByName(req: Request, res: Response){
		const userDAO = new UserDAO();
		
		const users = await userDAO.getAllWhere({userName: req.params.name});
		if(!users) throw new AppError("No users found");
		
		res.json(users);
	}

}