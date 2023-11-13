import { PrismaConnection } from "./DBDAO";
import { UserDTO } from "../dtos/UserDTO";
import { User } from "../models/User";	



export class UserDAO {
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: UserDTO): Promise<User>{
		const user = await this.dbConnection.client.user.create({data: data});
		return user;
	}
	

	async update(where : User, data: UserDTO): Promise<UserDTO | null>{
		
		if(!where)
			return null;

		try {
			const user = await this.dbConnection.client.user.update({where, data});
			return user;
		} catch (error) {
			return null;
		}
	}

	async delete(where: User): Promise<UserDTO | null>{
		
		if(!where)
			return null;
		try{
			const user = await this.dbConnection.client.user.delete({where});
			return user;
		}catch(error){
			return null;
		}
	}

	async get(where: User): Promise<UserDTO | null>{
		if(!where)
			return null;

		const user = await this.dbConnection.client.user.findUnique({where});
		return user;
	}
}

