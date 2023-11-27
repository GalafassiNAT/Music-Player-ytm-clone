import { PrismaConnection } from "./DBDAO.ts";
import { UserAlbumDTO } from "../dtos/UserAlbumDTO.ts";
import { UserAlbum } from "../models/UserAlbum.ts";

export class UserAlbumDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: UserAlbumDTO): Promise<UserAlbum>{
		const userAlbum = await this.dbConnection.client.useralbums.create({data: data});
		return userAlbum;
	}

	async update(where: UserAlbum, data: UserAlbumDTO): Promise<UserAlbumDTO | null>{
		if(!where)
			return null;

		try {
			const userAlbum = await this.dbConnection.client.useralbums.update({
				where: {
					userId_albumId: {
						userId: where.userId, 
						albumId: where.albumId
					}
				},
				
				data});

			return userAlbum;
		} catch (error) {
			return null;
		}
	}

	async get(where: UserAlbum): Promise<UserAlbumDTO | null>{
		if(!where)
			return null;

		const userAlbum = await this.dbConnection.client.useralbums.findUnique({
			where:{
				userId_albumId: {
					userId: where.userId,
					albumId: where.albumId
				}
			}});

		return userAlbum;
	}

	async delete(where: UserAlbum): Promise<UserAlbumDTO | null>{
		if(!where)
			return null;

		try{
			const userAlbum = await this.dbConnection.client.useralbums.delete({
				where:{
					userId_albumId: {
						userId: where.userId,
						albumId: where.albumId
					}
				}
			});
			
			return userAlbum;
		}catch(error){
			return null;
		}
	}

}