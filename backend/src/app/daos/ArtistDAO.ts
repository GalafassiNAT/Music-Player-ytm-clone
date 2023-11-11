import { PrismaConnection } from "./DBDAO";
import { ArtistDTO } from "../dtos/ArtistDTO";
import { Artist } from "../models/Artist";



export class UrtistDAO {
	dbConnection: PrismaConnection;
	
	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}


	async Create(data: ArtistDTO): Promise<Artist>{
		const artist = await this.dbConnection.client.artist.create({data: data});
		return artist;
	}
	

	async Update(where : Artist, data: ArtistDTO): Promise<ArtistDTO | null>{
		
		if(!where)
			return null;

		try {
			const urtist = await this.dbConnection.client.artist.update({where, data});
			return urtist;
		} catch (error) {
			return null;
		}
	}

	async Delete(where: Artist): Promise<ArtistDTO | null>{
		
		if(!where)
			return null;
		try{
			const urtist = await this.dbConnection.client.artist.delete({where});
			return urtist;
		}catch(error){
			return null;
		}
	}

	async Get(where: Artist): Promise<ArtistDTO | null>{
		if(!where)
			return null;

		const urtist = await this.dbConnection.client.artist.findUnique({where});
		return urtist;
	}
}

