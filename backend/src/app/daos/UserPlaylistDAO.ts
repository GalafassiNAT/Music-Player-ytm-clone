import { PrismaConnection } from "./DBDAO";
import { UserPlaylistDTO } from "../dtos/UserPlaylistDTO";
import { UserPlaylist } from "../models/UserPlaylist";

export class UserPlaylistDAO{
	dbConnection: PrismaConnection;

	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}

	async create(data: UserPlaylistDTO): Promise<UserPlaylist>{
		const userPlaylist = await this.dbConnection.client.userplaylists.create({data: data});
		return userPlaylist;
	}

	async update(where: UserPlaylist, data: UserPlaylistDTO): Promise<UserPlaylistDTO | null>{
		if(!where)
			return null;

		try {
			const userPlaylist = await this.dbConnection.client.userplaylists.update({where, data});
			return userPlaylist;
		} catch (error) {
			return null;
		}
	}

	async get(where: UserPlaylist): Promise<UserPlaylistDTO | null>{
		if(!where)
			return null;

		const userPlaylist = await this.dbConnection.client.userplaylists.findUnique({where});
		return userPlaylist;
	}

	async delete(where: UserPlaylist): Promise<UserPlaylistDTO | null>{
		if(!where)
			return null;

		try{
			const userPlaylist = await this.dbConnection.client.userplaylists.delete({where});
			return userPlaylist;
		}catch(error){
			return null;
		}
	}

}