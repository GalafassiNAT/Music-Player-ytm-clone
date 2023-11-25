import { PrismaConnection } from "./DBDAO";
import { UserDTO } from "../dtos/UserDTO";
import { User } from "../models/User";	
import { AppError } from "../errors/AppError";



export class UserDAO {
	
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: UserDTO): Promise<User | null>{
		if (await this.get(data.email)) return null;
		
		const user = await this.dbConnection.client.user.create({data: data});
		return user;
	}
	

	async update(where: Partial<User> , data: UserDTO): Promise<UserDTO | null>{
		if(!where) return null;
		
		try {
			const user = await this.dbConnection.client.user.update({
				where: {
					email: where.email,
					id: where.id
				}, data});
			return user;
		} catch (error) {	
			throw new AppError("User not found");
		}
	}

	async delete(where: Partial<User>): Promise<UserDTO | null>{
		
		if(!where)
			return null;
		try{
			const user = await this.dbConnection.client.user.delete({where: {id: where.id, email: where.email}});
			return user;
		}catch(error){
			throw new AppError("User not found");
		}
	}

	async get(where: string): Promise<User | null>{
		if(!where)
			return null;

		const user = await this.dbConnection.client.user.findFirst({
			where: {
				OR: [
					{id: where}, 
					{email: where}
				]
			}
		});
		return user;	
	}

	async getAll(): Promise<UserDTO[]>{
		const users = await this.dbConnection.client.user.findMany();
		return users;
	}

	async getAllWhere(where: Partial<User>): Promise<UserDTO[]>{
		if(!where)
			return [];
		
		const users = await this.dbConnection.client.user.findMany({where: where});
		return users;
	}

}

