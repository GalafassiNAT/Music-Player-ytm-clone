import { PrismaConnection } from "./DBDAO";
import { ArtistDTO } from "../dtos/ArtistDTO";
import { Artist } from "../models/Artist";



export class ArtistDAO {
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}



	async create(data: ArtistDTO): Promise<Artist>{
		const artist = await this.dbConnection.client.artist.create({data: data});
		return artist;
	}
	

	async update(where : Partial<Artist>, data: ArtistDTO): Promise<ArtistDTO | null>{
		
		if(!where)
			return null;

		try {
			const artist = await this.dbConnection.client.artist.update({where: {id: where.id}, data});
			return artist;
		} catch (error) {
			return null;
		}
	}

	async delete(where: Partial<Artist>): Promise<ArtistDTO | null>{
		
		if(!where)
			return null;
		try{
			const artist = await this.dbConnection.client.artist.delete({where: {id: where.id}});
			return artist;
		}catch(error){
			return null;
		}
	}

	async get(where: Partial<Artist>): Promise<ArtistDTO | null | ArtistDTO[]>{
		if(!where)
			return null;

		if(where.id){
			const artist = await this.dbConnection.client.artist.findUnique({where: {id: where.id}});
			return artist;
		}
		
		const artist = await this.dbConnection.client.artist.findMany({where: {name: where.name}});
		return artist;

	}

	async getAll(): Promise<ArtistDTO[]>{
		const artists = await this.dbConnection.client.artist.findMany();
		return artists;
	}

	async getAllWhere(where: Partial<Artist>): Promise<ArtistDTO[]>{
		const artists = await this.dbConnection.client.artist.findMany({where});
		return artists;
	}
	
}

