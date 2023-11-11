import { PrismaConnection } from "./DBDAO";
import { LikesDTO } from "../dtos/LikesDTO";
import { Likes } from "../models/Likes";

export class LikesDAO{
	dbConnection: PrismaConnection;

	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}

	async create(data: LikesDTO): Promise<Likes>{
		const likes = await this.dbConnection.client.likes.create({data: data});
		return likes;
	}

	async update(where: Likes, data: LikesDTO): Promise<LikesDTO | null>{
		if(!where)
			return null;

		try {
			const likes = await this.dbConnection.client.likes.update({where, data});
			return likes;
		} catch (error) {
			return null;
		}
	}

	async get(where: Likes): Promise<LikesDTO | null>{
		if(!where)
			return null;

		const likes = await this.dbConnection.client.likes.findUnique({where});
		return likes;
	}

	async delete(where: Likes): Promise<LikesDTO | null>{
		if(!where)
			return null;

		try{
			const likes = await this.dbConnection.client.likes.delete({where});
			return likes;
		}catch(error){
			return null;
		}
	}

}