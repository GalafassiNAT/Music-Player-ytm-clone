import { PrismaConnection } from "./DBDAO";
import { ArtistSongDTO } from "../dtos/ArtistSongDTO";
import { ArtistSong } from "../models/ArtistSong";

export class ArtistSongDAO{
	dbConnection: PrismaConnection;

	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}

	async create(data: ArtistSongDTO): Promise<ArtistSong>{
		const artistSong = await this.dbConnection.client.artistsongs.create({data: data});
		return artistSong;
	}

	async update(where: ArtistSong, data: ArtistSongDTO): Promise<ArtistSongDTO | null>{
		if(!where)
			return null;

		try {
			const artistSong = await this.dbConnection.client.artistsongs.update({where, data});
			return artistSong;
		} catch (error) {
			return null;
		}
	}

	async get(where: ArtistSong): Promise<ArtistSongDTO | null>{
		if(!where)
			return null;

		const artistSong = await this.dbConnection.client.artistsongs.findUnique({where});
		return artistSong;
	}

	async delete(where: ArtistSong): Promise<ArtistSongDTO | null>{
		if(!where)
			return null;

		try{
			const artistSong = await this.dbConnection.client.artistsongs.delete({where});
			return artistSong;
		}catch(error){
			return null;
		}
	}

	

}