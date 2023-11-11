import { PrismaConnection } from "./DBDAO";
import { SongGenreDTO } from "../dtos/SongGenreDTO";
import { SongGenre } from "../models/SongGenre";

export class SongGenreDAO{
	dbConnection: PrismaConnection;

	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}

	async create(data: SongGenreDTO): Promise<SongGenre>{
		const songGenre = await this.dbConnection.client.songgenres.create({data: data});
		return songGenre;
	}

	async update(where: SongGenre, data: SongGenreDTO): Promise<SongGenreDTO | null>{
		if(!where)
			return null;

		try {
			const songGenre = await this.dbConnection.client.songgenres.update({where, data});
			return songGenre;
		} catch (error) {
			return null;
		}
	}

	async get(where: SongGenre): Promise<SongGenreDTO | null>{
		if(!where)
			return null;

		const songGenre = await this.dbConnection.client.songgenres.findUnique({where});
		return songGenre;
	}

	async delete(where: SongGenre): Promise<SongGenreDTO | null>{
		if(!where)
			return null;

		try{
			const songGenre = await this.dbConnection.client.songgenres.delete({where});
			return songGenre;
		}catch(error){
			return null;
		}
	}
	
}