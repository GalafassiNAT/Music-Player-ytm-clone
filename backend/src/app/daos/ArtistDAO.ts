import { PrismaConnection } from "./DBDAO.ts";
import { ArtistDTO } from "../dtos/ArtistDTO.ts";
import { Artist } from "../models/Artist.ts";



export class ArtistDAO {
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}

	async create(data: ArtistDTO): Promise<Artist>{
		const artist = await this.dbConnection.client.artist.create({data: {
			name: data.name,
			about: Buffer.from(data.about),
			profilePicture: data.profilePicture,
			numberOfFollowers: 0
		}});

		const about = artist.about ? artist.about.toString() : "";

		const artistObject = new Artist(artist.id, artist.name, about, artist.createdAt, artist.updatedAt, artist.profilePicture);
		artistObject.setNumberOfFollowers(artist.numberOfFollowers);

		return artistObject;
	}
	

	async update(where : Partial<Artist>, data: ArtistDTO): Promise<ArtistDTO | null>{
		
		if(!where)
			return null;

		try {
			const artist = await this.dbConnection.client.artist.update({where: {id: where.id}, data: {
				name: data.name,
				about: Buffer.from(data.about),
				profilePicture: data.profilePicture
			}});
			
			const about = artist.about ? artist.about.toString() : "";

			const artistDTO = new ArtistDTO(artist.name, about, artist.createdAt, artist.updatedAt, artist.profilePicture, artist.numberOfFollowers);

			return artistDTO;
		} catch (error) {
			return null;
		}
	}

	async delete(where: Partial<Artist>): Promise<ArtistDTO | null>{
		
		if(!where)
			return null;
		try{
			const artist = await this.dbConnection.client.artist.delete({where: {id: where.id}});
			const about = artist.about ? artist.about.toString() : "";

			const artistDTO = new ArtistDTO(artist.name, about, artist.createdAt, artist.updatedAt, artist.profilePicture, artist.numberOfFollowers);

			return artistDTO;
		}catch(error){
			return null;
		}
	}

	async get(where: Partial<Artist>): Promise<ArtistDTO | null | ArtistDTO[]>{
		if(!where)
			return null;

		if(where.id){
			const artist = await this.dbConnection.client.artist.findUnique({where: {id: where.id}});
			if(!artist)
				return null;
			const about = artist.about ? artist.about.toString() : "";
			const artistDTO = new ArtistDTO(artist.name, about, artist.createdAt, artist.updatedAt, artist.profilePicture, artist.numberOfFollowers);

			return artistDTO;
		}
		
		const artists = await this.dbConnection.client.artist.findMany({where: {name: where.name}});
		if(!artists)
			return null;

		const artistsDTO = artists.map(artist => new ArtistDTO(artist.name, artist.about ? artist.about.toString() : "", artist.createdAt, artist.updatedAt, artist.profilePicture, artist.numberOfFollowers));

		return artistsDTO;

	}

	async getAll(): Promise<ArtistDTO[] | null>{
		const artists = await this.dbConnection.client.artist.findMany();
		if(!artists) return [];

		const artistsDTO = artists.map(artist => new ArtistDTO(artist.name,  artist.about ? artist.about.toString() : "", artist.createdAt, artist.updatedAt, artist.profilePicture, artist.numberOfFollowers));

		return artistsDTO;
	}

	async getAllWhere(where: Partial<Artist>): Promise<ArtistDTO[]>{

		const artists = await this.dbConnection.client.artist.findMany({where: {name: where.name } || {numberOfFollowers: where.getNumberOfFollowers}});
		if(!artists) return [];


		const artistsDTO = artists.map(artist => new ArtistDTO(artist.name, artist.about ? artist.about.toString() : "", artist.createdAt, artist.updatedAt, artist.profilePicture, artist.numberOfFollowers));

		return artistsDTO;
	}
	
}

