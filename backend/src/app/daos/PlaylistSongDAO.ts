import { PrismaConnection } from "./DBDAO";
import { PlaylistSongDTO } from "../dtos/PlaylistSongDTO";
import { PlaylistSong } from "../models/PlaylistSong";

export class PlaylistSongDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: PlaylistSongDTO): Promise<PlaylistSong>{
		const playlistSong = await this.dbConnection.client.playlistsongs.create({data: data});
		return playlistSong;
	}

	async update(where: PlaylistSong, data: PlaylistSongDTO): Promise<PlaylistSongDTO | null>{
		if(!where)
			return null;

		try {
			const playlistSong = await this.dbConnection.client.playlistsongs.update({where, data});
			return playlistSong;
		} catch (error) {
			return null;
		}
	}

	async get(where: PlaylistSong): Promise<PlaylistSongDTO | null>{
		if(!where)
			return null;

		const playlistSong = await this.dbConnection.client.playlistsongs.findUnique({where});
		return playlistSong;
	}

	async delete(where: PlaylistSong): Promise<PlaylistSongDTO | null>{
		if(!where)
			return null;

		try{
			const playlistSong = await this.dbConnection.client.playlistsongs.delete({where});
			return playlistSong;
		}catch(error){
			return null;
		}
	}

}