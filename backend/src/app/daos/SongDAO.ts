import { PrismaConnection } from "./DBDAO.ts";
import { SongDTO } from "../dtos/SongDTO.ts";
import { Song } from "../models/Song.ts";


export class SongDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: SongDTO): Promise<Song | null>{
		const verify = await this.dbConnection.client.song.findFirst({where: {name: data.name}, include: { artistsongs: true} });

		if(verify && verify.artistsongs.map(artistsong => artistsong.artistId).includes(data.artistId))
			return null;

		const song = await this.dbConnection.client.song.create({
			data: {
				name: data.name,
				duration: data.duration,
				albumId: data.albumId,
				description: data.description,
				contentURL: data.contentURL,
				cover: data.cover,
				numberOfLikes: data.numberOfLikes,
				releaseDate: data.releaseDate,
				filePath: data.filePath,
				artistsongs: {
					create: {
						artistId: data.artistId
					}
				}
			},
			include: {
				artistsongs: true
			} 
		});

		const songWithArtists: Song = {
			id: song.id,
			artistId: song.artistsongs[0].artistId,
			name: song.name,
			duration: song.duration,
			albumId: song.albumId,
			description: song.description,
			contentURL: song.contentURL,
			cover: song.cover,
			numberOfLikes: song.numberOfLikes,
			releaseDate: song.releaseDate,
			filePath: song.filePath,
			createdAt: song.createdAt,
			updatedAt: song.updatedAt,

			artists: song.artistsongs.map(artistsong => {
				return {
					id: artistsong.artistId,
					artistId: artistsong.artistId,
					songId: artistsong.songId,
					createdAt: artistsong.createdAt
				};
			})
		};

		return songWithArtists;
	}

	async update(where: Partial<Song>, data: SongDTO){
		if(!where)
			return null;

		try {
			const song = await this.dbConnection.client.song.update({where: {id: where.id}, data});
			return song;
		} catch (error) {
			return null;
		}
	}

	async get(where: Partial<Song>): Promise<SongDTO | null>{
		if(!where)
			return null;

		const song = await this.dbConnection.client.song.findUnique({where: {id: where.id}, include: { artistsongs: true}});
		if(!song)
			return null;

		const songDTO: SongDTO = {
			
			name: song.name,
			duration: song.duration,
			albumId: song.albumId,
			artistId: song.artistsongs[0].artistId,
			description: song.description,
			contentURL: song.contentURL,
			cover: song.cover,
			numberOfLikes: song.numberOfLikes,
			releaseDate: song.releaseDate,
			filePath: song.filePath,
			createdAt: song.createdAt,
			updatedAt: song.updatedAt
		};

		return songDTO;
	}


	async getAll(): Promise<SongDTO[]>{
		const songs = await this.dbConnection.client.song.findMany({include: { artistsongs: true}});
		if(!songs)
			return [];

		const songsDTO: SongDTO[] = songs.map(song => {
			return {
				name: song.name,
				duration: song.duration,
				albumId: song.albumId,
				artistId: song.artistsongs[0].artistId,
				description: song.description,
				contentURL: song.contentURL,
				cover: song.cover,
				numberOfLikes: song.numberOfLikes,
				releaseDate: song.releaseDate,
				filePath: song.filePath,
				createdAt: song.createdAt,
				updatedAt: song.updatedAt
			};
		});

		return songsDTO;
	}

	async getAllWhere(where: Partial<Song>): Promise<SongDTO[]>{
		if(!where)
			return [];

		const songs = await this.dbConnection.client.song.findMany({where: where, include: { artistsongs: true}});
		if(!songs)
			return [];

		const songsDTO: SongDTO[] = songs.map(song => {
			return {
				name: song.name,
				duration: song.duration,
				albumId: song.albumId,
				artistId: song.artistsongs[0].artistId,
				description: song.description,
				contentURL: song.contentURL,
				cover: song.cover,
				numberOfLikes: song.numberOfLikes,
				releaseDate: song.releaseDate,
				filePath: song.filePath,
				createdAt: song.createdAt,
				updatedAt: song.updatedAt
			};
		});

		return songsDTO;
	}


	async delete(where: Partial<Song>): Promise<SongDTO | null>{
		
		if(!where)
			return null;
		try{
			const song = await this.dbConnection.client.song.delete({where: {id: where.id}, include: { artistsongs: true}});

			const songDTO: SongDTO = {
				name: song.name,
				duration: song.duration,
				albumId: song.albumId,
				artistId: song.artistsongs[0].artistId,
				description: song.description,
				contentURL: song.contentURL,
				cover: song.cover,
				numberOfLikes: song.numberOfLikes,
				releaseDate: song.releaseDate,
				filePath: song.filePath,
				createdAt: song.createdAt,
				updatedAt: song.updatedAt
			};

			return songDTO;
		}catch(error){
			return null;
		}
	}
}