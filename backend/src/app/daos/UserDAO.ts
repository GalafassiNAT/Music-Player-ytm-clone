import { PrismaConnection } from "./DBDAO";
import { UserDTO } from "../dtos/UserDTO";
import { User } from "../models/User";	



export class UserDAO {
	dbConnection: PrismaConnection;
	
	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}


	async Create(data: UserDTO): Promise<User>{
		const user = await this.dbConnection.client.user.create({data: data});
		return user;
	}
	

	async Update(where : User, data: UserDTO): Promise<UserDTO | null>{
		
		if(!where)
			return null;

		try {
			const user = await this.dbConnection.client.user.update({where, data});
			return user;
		} catch (error) {
			return null;
		}
	}

	async Delete(where: User): Promise<UserDTO | null>{
		
		if(!where)
			return null;
		try{
			const user = await this.dbConnection.client.user.delete({where});
			return user;
		}catch(error){
			return null;
		}
	}

	async Get(where: User): Promise<UserDTO | null>{
		if(!where)
			return null;

		const user = await this.dbConnection.client.user.findUnique({where});
		return user;
	}
}

