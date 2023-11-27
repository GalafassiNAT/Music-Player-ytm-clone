import { PrismaConnection } from "./DBDAO.ts";
import { PlaylistSongDTO } from "../dtos/PlaylistSongDTO.ts";
import { PlaylistSong } from "../models/PlaylistSong.ts";
import { AppError } from "../errors/AppError.ts";

export class PlaylistSongDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: PlaylistSong): Promise<PlaylistSong>{
		const playlistSong = await this.dbConnection.client.playlistsongs.create({data: data});

		return playlistSong;
	}

	async update(where: {playlistId: string, songId: string}, data: PlaylistSong): Promise<PlaylistSongDTO | null>{
		if(!where)
			return null;

		try {
			const playlistSong = await this.dbConnection.client.playlistsongs.update({where: {
				playlistId_songId: {
					playlistId: where.playlistId,
					songId: where.songId
				
				}
			}, 
			data
			});

			const playlistSongDTO = new PlaylistSongDTO(playlistSong.playlistId, playlistSong.songId, playlistSong.createdAt, playlistSong.updatedAt);

			return playlistSongDTO;

		} catch (error) {
			return null;
		}
	}

	async get(where: PlaylistSong): Promise<PlaylistSongDTO | null>{
		if(!where)
			throw new AppError("No information provided to get playlistSong");

		const playlistSong = await this.dbConnection.client.playlistsongs.findUnique({where: {playlistId_songId: {playlistId: where.playlistId, songId: where.songId}}});
		if(!playlistSong)
			return null;

		const playlistSongDTO = new PlaylistSongDTO(playlistSong.playlistId, playlistSong.songId, playlistSong.createdAt, playlistSong.updatedAt);

		return playlistSongDTO;
	}

	async delete(where: PlaylistSong): Promise<PlaylistSongDTO | null>{
		if(!where)
			return null;

		try{
			const playlistSong = await this.dbConnection.client.playlistsongs.delete({where: {playlistId_songId: {playlistId: where.playlistId, songId: where.songId}}});

			const playlistSongDTO = new PlaylistSongDTO(playlistSong.playlistId, playlistSong.songId, playlistSong.createdAt, playlistSong.updatedAt);

			return playlistSongDTO;
		}catch(error){
			return null;
		}
	}

}