import { PrismaConnection } from "./DBDAO.ts";
import { LikesDTO } from "../dtos/LikesDTO.ts";
import { Likes } from "../models/Likes.ts";

export class LikesDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: LikesDTO): Promise<Likes>{
		const likes = await this.dbConnection.client.likes.create({data: data});
		return likes;
	}

	async update(where: Likes, data: LikesDTO): Promise<LikesDTO | null>{
		if(!where)
			return null;

		try {
			const likes = await this.dbConnection.client.likes.update({
				where:{
					userId_songId:{
						userId: where.userId,
						songId: where.songId
					}
				
				}, data});

			return likes;
		} catch (error) {
			return null;
		}
	}

	async get(where: Likes): Promise<LikesDTO | null>{
		if(!where)
			return null;

		const likes = await this.dbConnection.client.likes.findUnique({
			where:{
				userId_songId:{
					userId: where.userId,
					songId: where.songId
				}
		
			}});
		return likes;
	}

	async delete(where: Likes): Promise<LikesDTO | null>{
		if(!where)
			return null;

		try{
			const likes = await this.dbConnection.client.likes.delete({
				where:{
					userId_songId:{
						userId: where.userId,
						songId: where.songId
					}
				}});

			return likes;
		}catch(error){
			return null;
		}
	}

}