import { PrismaConnection } from "./DBDAO";
import { AlbumDTO } from "../dtos/AlbumDTO";
import { Album } from "../models/Album";


export class AlbumDAO{
	dbConnection: PrismaConnection;

	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}

	async create(data: Album): Promise<Album>{
		const albumCreateInput = {
			id: "",
			duration: 0,
			artist: data.artist,
			name: data.name,
			artistId: data.artistId,
			description: data.description,
			image: data.image,
			releaseDate: data.releaseDate,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			songs: data.songs,

		};

		const album = await this.dbConnection.client.album.create({
			data:{
				duration: albumCreateInput.duration,
				name: albumCreateInput.name,
				artistId: albumCreateInput.artistId,
				description: albumCreateInput.description,
				image: albumCreateInput.image,
				releaseDate: albumCreateInput.releaseDate,
			}
		
		});
		
		albumCreateInput.id = album.id;
		albumCreateInput.createdAt = album.createdAt;
		albumCreateInput.updatedAt = album.updatedAt;
		
		return albumCreateInput;
		
	}

	async update(where : Album, data: AlbumDTO): Promise<AlbumDTO | null>{
		
		if(!where)
			return null;

		try {
			const album = await this.dbConnection.client.album.update({where, data});
			return album;
		} catch (error) {
			return null;
		}
	}

	async get(where: Album): Promise<AlbumDTO | null>{
		if(!where)
			return null;

		const album = await this.dbConnection.client.album.findUnique({where});
		return album;
	}

	async delete(where: Album): Promise<AlbumDTO | null>{
		
		if(!where)
			return null;
		try{
			const album = await this.dbConnection.client.album.delete({where});
			return album;
		}catch(error){
			return null;
		}
	}


}