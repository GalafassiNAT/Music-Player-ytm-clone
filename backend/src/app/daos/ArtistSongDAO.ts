import { PrismaConnection } from "./DBDAO.ts";
import { ArtistSongDTO } from "../dtos/ArtistSongDTO.ts";
import { ArtistSong } from "../models/ArtistSong.ts";

export class ArtistSongDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: ArtistSongDTO): Promise<ArtistSong>{
		const artistSong = await this.dbConnection.client.artistsongs.create({data: data});
		return artistSong;
	}

	async update(where: ArtistSong, data: ArtistSongDTO): Promise<ArtistSongDTO | null>{
		if(!where)
			return null;

		try {
			const artistSong = await this.dbConnection.client.artistsongs.update({
				where:{
					artistId_songId:{
						artistId: where.artistId,
						songId: where.songId
					}
				
				}, data});

			return artistSong;
		} catch (error) {
			return null;
		}
	}

	async get(where: ArtistSong): Promise<ArtistSongDTO | null>{
		if(!where)
			return null;

		const artistSong = await this.dbConnection.client.artistsongs.findUnique({
			where:{
				artistId_songId:{
					artistId: where.artistId,
					songId: where.songId
				}
			}});
		
		return artistSong;
	}

	async delete(where: ArtistSong): Promise<ArtistSongDTO | null>{
		if(!where)
			return null;

		try{
			const artistSong = await this.dbConnection.client.artistsongs.delete({
				where:{
					artistId_songId:{
						artistId: where.artistId,
						songId: where.songId
					}
				}});

			return artistSong;
		}catch(error){
			return null;
		}
	}

	

}