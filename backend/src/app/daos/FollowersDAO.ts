import { PrismaConnection } from "./DBDAO.ts";
import { FollowersDTO } from "../dtos/FollowersDTO.ts";
import { Followers } from "../models/Followers.ts";

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
			const followers = await this.dbConnection.client.followers.update({
				where:{
					userId_artistId:{
						userId: where.userId,
						artistId: where.artistId
					}
				
				}, data});
				
			return followers;
		} catch (error) {
			return null;
		}
	}

	async get(where: Followers): Promise<FollowersDTO | null>{
		if(!where)
			return null;

		const followers = await this.dbConnection.client.followers.findUnique({
			where:{
				userId_artistId:{
					userId: where.userId,
					artistId: where.artistId
				}
		
			}});

		return followers;
	}

	async delete(where: Followers): Promise<FollowersDTO | null>{
		if(!where)
			return null;

		try{
			const followers = await this.dbConnection.client.followers.delete({
				where:{
					userId_artistId:{
						userId: where.userId,
						artistId: where.artistId
					}
				}});

			return followers;
		}catch(error){
			return null;
		}
	}

}