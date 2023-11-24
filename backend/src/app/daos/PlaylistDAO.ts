import { PrismaConnection } from "./DBDAO";
import { PlaylistDTO } from "../dtos/PlaylistDTO";
import { Playlist } from "../models/Playlist";

export class PlaylistDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: PlaylistDTO): Promise<Playlist>{
		const
		const playlist = await this.dbConnection.client.playlist.create({data: data});
		return playlist;
	}

	async update(where: Playlist, data: PlaylistDTO): Promise<PlaylistDTO | null>{
		if(!where)
			return null;

		try {
			const playlist = await this.dbConnection.client.playlist.update({where, data});
			return playlist;
		} catch (error) {
			return null;
		}
	}

	async get(where: Playlist): Promise<PlaylistDTO | null>{
		if(!where)
			return null;

		const playlist = await this.dbConnection.client.playlist.findUnique({where});
		return playlist;
	}

	async delete(where: Playlist): Promise<PlaylistDTO | null>{
		if(!where)
			return null;

		try{
			const playlist = await this.dbConnection.client.playlist.delete({where});
			return playlist;
		}catch(error){
			return null;
		}
	}

}