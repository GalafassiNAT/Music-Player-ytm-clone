import { PrismaConnection } from "./DBDAO";
import { PlaylistDTO } from "../dtos/PlaylistDTO";
import { Playlist } from "../models/Playlist";

export class PlaylistDAO{
	dbconnection: PrismaConnection;

	constructor(dbconnection: PrismaConnection){
		this.dbconnection = dbconnection;
		this.dbconnection.connect();
	}

	async create(data: PlaylistDTO): Promise<Playlist>{
		const playlist = await this.dbconnection.client.playlist.create({data: data});
		return playlist;
	}

	async update(where: Playlist, data: PlaylistDTO): Promise<PlaylistDTO | null>{
		if(!where)
			return null;

		try {
			const playlist = await this.dbconnection.client.playlist.update({where, data});
			return playlist;
		} catch (error) {
			return null;
		}
	}

	async get(where: Playlist): Promise<PlaylistDTO | null>{
		if(!where)
			return null;

		const playlist = await this.dbconnection.client.playlist.findUnique({where});
		return playlist;
	}

	async delete(where: Playlist): Promise<PlaylistDTO | null>{
		if(!where)
			return null;

		try{
			const playlist = await this.dbconnection.client.playlist.delete({where});
			return playlist;
		}catch(error){
			return null;
		}
	}

}