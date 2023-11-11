import { PrismaConnection } from "./DBDAO";
import { AlbumDTO } from "../dtos/AlbumDTO";
import { Album } from "../models/Album";


export class AlbumDAO{
	dbConnection: PrismaConnection;

	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}

	async create(data: AlbumDTO): Promise<Album>{
		const album = await this.dbConnection.client.album.create({data: data});
		return album;
	}

	async update(where : Album, data: AlbumDTO): Promise<AlbumDTO | null>{
		
		if(!where)
			return null;

		try {
			const album = await this.dbConnection.client.album.update({where, data});
			return album;
		} catch (error) {
			return null;
		}
	}

	async get(where: Album): Promise<AlbumDTO | null>{
		if(!where)
			return null;

		const album = await this.dbConnection.client.album.findUnique({where});
		return album;
	}

	async delete(where: Album): Promise<AlbumDTO | null>{
		
		if(!where)
			return null;
		try{
			const album = await this.dbConnection.client.album.delete({where});
			return album;
		}catch(error){
			return null;
		}
	}


}