import { PrismaConnection } from "./DBDAO";
import { SongDTO } from "../dtos/SongDTO";
import { Song } from "../models/Song";


export class SongDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: SongDTO): Promise<Song>{
		const song = await this.dbConnection.client.song.create({data: data });
		return song;
	}

	async update(where: Song, data: SongDTO){
		if(!where)
			return null;

		try {
			const song = await this.dbConnection.client.song.update({where, data});
			return song;
		} catch (error) {
			return null;
		}
	}

	async get(where: Song): Promise<SongDTO | null>{
		if(!where)
			return null;

		const song = await this.dbConnection.client.song.findUnique({where});
		return song;
	}


	async delete(where: Song): Promise<SongDTO | null>{
		
		if(!where)
			return null;
		try{
			const song = await this.dbConnection.client.song.delete({where});
			return song;
		}catch(error){
			return null;
		}
	}
}