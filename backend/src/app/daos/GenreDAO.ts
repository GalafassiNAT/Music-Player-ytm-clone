import { PrismaConnection } from "./DBDAO";
import { GenreDTO } from "../dtos/GenreDTO";
import { Genre } from "../models/Genre";

export class GenreDAO{
	dbConnection: PrismaConnection;

	constructor(dbConnection: PrismaConnection){
		this.dbConnection = dbConnection;
		this.dbConnection.connect();
	}

	async create(data: GenreDTO): Promise<Genre>{
		const genre = await this.dbConnection.client.genre.create({data: data});
		return genre;
	}

	async update(where: Genre, data: GenreDTO): Promise<GenreDTO | null>{
		if(!where)
			return null;

		try {
			const genre = await this.dbConnection.client.genre.update({where, data});
			return genre;
		} catch (error) {
			return null;
		}
	}

	async get(where: Genre): Promise<GenreDTO | null>{
		if(!where)
			return null;

		const genre = await this.dbConnection.client.genre.findUnique({where});
		return genre;
	}

	async delete(where: Genre): Promise<GenreDTO | null>{
		if(!where)
			return null;

		try{
			const genre = await this.dbConnection.client.genre.delete({where});
			return genre;
		}catch(error){
			return null;
		}
	}

}