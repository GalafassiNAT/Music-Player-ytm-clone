import { PrismaConnection } from "./DBDAO";
import { AlbumDTO } from "../dtos/AlbumDTO";
import { Album } from "../models/Album";


export class AlbumDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}

	async create(data: Album): Promise<AlbumDTO | null>{
		const albumCreateInput = {
			id: data.id,
			duration: data.duration,
			artistId: data.artistId,
			name: data.name,
			description: data.description,
			image: data.image,
			releaseDate: data.releaseDate,
			createdAt: data.createdAt,	
			updatedAt: data.updatedAt,
			songs: data.songs.map(song => song.id) || [],
			songCount: data.songs.length,

		};

		if(await this.dbConnection.client.album.findFirst({
			where: {
				name: albumCreateInput.name
			}
		} && {
			where: {
				artistId: albumCreateInput.artistId
			}
		})) return null;



		const album = await this.dbConnection.client.album.create({
			data:{
				duration: albumCreateInput.duration,
				name: albumCreateInput.name,
				artistId: albumCreateInput.artistId,
				description: albumCreateInput.description,
				image: albumCreateInput.image,
				releaseDate: albumCreateInput.releaseDate,
				song: {
					connect: albumCreateInput.songs.map(songId => ({id: songId})),
				}
			},
			include:{
				artist: true,
				song: true,
			},
		});
		albumCreateInput.songs = album.song.map(song => song.id);
		albumCreateInput.songCount = album.song.length;
		albumCreateInput.id = album.id;
		albumCreateInput.createdAt = album.createdAt;
		albumCreateInput.updatedAt = album.updatedAt;
		
		return albumCreateInput;
		
	}

	async update(where : Partial<Album>, data: AlbumDTO): Promise<AlbumDTO | null>{
		
		if(!where)
			return null;

		try {
			const album = await this.dbConnection.client.album.update({
				where: { id: where.id },
				data: {
					duration: data.duration,
					name: data.name,
					artistId: data.artistId,
					description: data.description,
					image: data.image,
					releaseDate: data.releaseDate,
					song: {
						connect: data.songs.map(songId => ({id: songId})),
					}
				},
				include:{
					artist: true,
					song: true,
				},
			});

			const albumDTO = {
				duration: album.duration,
				name: album.name,
				artistId: album.artistId,
				description: album.description,
				image: album.image,
				releaseDate: album.releaseDate,
				songs: album.song.map(song => song.id),
				songCount: album.song.length,
				createdAt: album.createdAt,
				updatedAt: album.updatedAt,
			};


			return albumDTO;
		} catch (error) {
			return null;
		}
	}

	async get(where: Partial<Album>): Promise<AlbumDTO | null>{
		if(!where)
			return null;

		const album = await this.dbConnection.client.album.findFirst({where, include: {artist: true, song: true}});
		if(!album)
			return null;	
		const albumDTO = {	
			duration: album.duration,
			name: album.name,
			artistId: album.artistId,
			description: album.description,
			image: album.image,
			releaseDate: album.releaseDate,
			songs: album.song.map(song => song.id),
			songCount: album.song.length,
			createdAt: album.createdAt,
			updatedAt: album.updatedAt,
		};
		return albumDTO;
	}

	async getAll(): Promise<AlbumDTO[] | null>{
		const albums = await this.dbConnection.client.album.findMany({include: {artist: true, song: true}});
		if(!albums)
			return null;
		const albumDTOs = albums.map(album => ({
			duration: album.duration,
			name: album.name,
			artistId: album.artistId,
			description: album.description,
			image: album.image,
			releaseDate: album.releaseDate,
			songs: album.song.map(song => song.id),
			songCount: album.song.length,
			createdAt: album.createdAt,
			updatedAt: album.updatedAt,
		}));

		return albumDTOs;
	}

	async getAllWhere(where: Partial<Album>): Promise<AlbumDTO[] | null>{
		if(!where)
			return null;
		const albums = await this.dbConnection.client.album.findMany({where, include: {artist: true, song: true}});
		if(!albums)
			return null;
		const albumDTOs = albums.map(album => ({
			duration: album.duration,
			name: album.name,
			artistId: album.artistId,
			description: album.description,
			image: album.image,
			releaseDate: album.releaseDate,
			songs: album.song.map(song => song.id),
			songCount: album.song.length,
			createdAt: album.createdAt,
			updatedAt: album.updatedAt,
		}));

		return albumDTOs;
	}

	async delete(where: Partial<Album>): Promise<AlbumDTO | null>{
		
		if(!where)
			return null;
		try{
			const album = await this.dbConnection.client.album.delete({
				where:{id: where.id}, 
				include: {artist: true, song: true}
			});

			const albumDTO = {
				duration: album.duration,
				name: album.name,
				artistId: album.artistId,
				description: album.description,
				image: album.image,
				releaseDate: album.releaseDate,
				songs: album.song.map(song => song.id),
				songCount: album.song.length,
				createdAt: album.createdAt,
				updatedAt: album.updatedAt,
			};


			return albumDTO;
		}catch(error){
			return null;
		}
	}


}