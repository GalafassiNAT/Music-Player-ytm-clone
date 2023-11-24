import { PrismaConnection } from "./DBDAO";
import { FollowersDTO } from "../dtos/FollowersDTO";
import { Followers } from "../models/Followers";

export class FollowersDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: FollowersDTO): Promise<Followers>{
		const followers = await this.dbConnection.client.followers.create({data: data});
		return followers;
	}

	async update(where: Followers, data: FollowersDTO): Promise<FollowersDTO | null>{
		if(!where)
			return null;

		try {
			const followers = await this.dbConnection.client.followers.update({where, data});
			return followers;
		} catch (error) {
			return null;
		}
	}

	async get(where: Followers): Promise<FollowersDTO | null>{
		if(!where)
			return null;

		const followers = await this.dbConnection.client.followers.findUnique({where});
		return followers;
	}

	async delete(where: Followers): Promise<FollowersDTO | null>{
		if(!where)
			return null;

		try{
			const followers = await this.dbConnection.client.followers.delete({where});
			return followers;
		}catch(error){
			return null;
		}
	}

}