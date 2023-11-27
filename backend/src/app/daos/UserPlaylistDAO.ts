import { PrismaConnection } from "./DBDAO.ts";
import { UserPlaylistDTO } from "../dtos/UserPlaylistDTO.ts";
import { UserPlaylist } from "../models/UserPlaylist.ts";

export class UserPlaylistDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: UserPlaylistDTO): Promise<UserPlaylist>{
		const userPlaylist = await this.dbConnection.client.userplaylists.create({data: data});
		return userPlaylist;
	}

	async update(where: UserPlaylist, data: UserPlaylistDTO): Promise<UserPlaylistDTO | null>{
		if(!where)
			return null;

		try {
			const userPlaylist = await this.dbConnection.client.userplaylists.update({
				where: {
					userId_playlistId: {
						userId: where.userId, 
						playlistId: where.playlistId
					}
				}, 
				data
			});

			return userPlaylist;
		} catch (error) {
			return null;
		}
	}

	async get(where: UserPlaylist): Promise<UserPlaylistDTO | null>{
		if(!where)
			return null;

		const userPlaylist = await this.dbConnection.client.userplaylists.findUnique({
			where: {
				userId_playlistId: {
					userId: where.userId, 
					playlistId: where.playlistId
				}
			}
		});
		return userPlaylist;
	}

	async delete(where: UserPlaylist): Promise<UserPlaylistDTO | null>{
		if(!where)
			return null;

		try{
			const userPlaylist = await this.dbConnection.client.userplaylists.delete({
				where: {
					userId_playlistId: {
						userId: where.userId, 
						playlistId: where.playlistId
					}
				}
			});
			return userPlaylist;
		}catch(error){
			return null;
		}
	}

}