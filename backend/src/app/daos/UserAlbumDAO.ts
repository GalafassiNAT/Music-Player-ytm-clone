import { PrismaConnection } from "./DBDAO";
import { UserAlbumDTO } from "../dtos/UserAlbumDTO";
import { UserAlbum } from "../models/UserAlbum";

export class UserAlbumDAO{
	dbConnection: PrismaConnection;

	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}

	async create(data: UserAlbumDTO): Promise<UserAlbum>{
		const userAlbum = await this.dbConnection.client.useralbums.create({data: data});
		return userAlbum;
	}

	async update(where: UserAlbum, data: UserAlbumDTO): Promise<UserAlbumDTO | null>{
		if(!where)
			return null;

		try {
			const userAlbum = await this.dbConnection.client.useralbums.update({where, data});
			return userAlbum;
		} catch (error) {
			return null;
		}
	}

	async get(where: UserAlbum): Promise<UserAlbumDTO | null>{
		if(!where)
			return null;

		const userAlbum = await this.dbConnection.client.useralbums.findUnique({where});
		return userAlbum;
	}

	async delete(where: UserAlbum): Promise<UserAlbumDTO | null>{
		if(!where)
			return null;

		try{
			const userAlbum = await this.dbConnection.client.useralbums.delete({where});
			return userAlbum;
		}catch(error){
			return null;
		}
	}

}