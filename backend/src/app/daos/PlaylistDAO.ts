import { PrismaConnection } from "./DBDAO.ts";
import { PlaylistDTO } from "../dtos/PlaylistDTO.ts";
import { Playlist } from "../models/Playlist.ts";

export class PlaylistDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: Playlist): Promise<PlaylistDTO>{
		data.duration = await data.getTotalDuration();
		const playlist = await this.dbConnection.client.playlist.create({data});
		const playlistDTO = {
			id: playlist.id,
			name: playlist.name,
			image: playlist.image,
			userId: playlist.userId,
			duration: playlist.duration,
			description: playlist.description,
			songCount: playlist.songCount,
			isPublic: playlist.isPublic,
			createdAt: playlist.createdAt,
			updatedAt: playlist.updatedAt
		};
		
		return playlistDTO;
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