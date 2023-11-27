import { PrismaConnection } from "./DBDAO.ts";
import { SongGenreDTO } from "../dtos/SongGenreDTO.ts";
import { SongGenre } from "../models/SongGenre.ts";

export class SongGenreDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: SongGenreDTO): Promise<SongGenre>{
		const songGenre = await this.dbConnection.client.songgenres.create({data: data});
		return songGenre;
	}

	async update(where: SongGenre, data: SongGenreDTO): Promise<SongGenreDTO | null>{
		if(!where)
			return null;

		try {
			const songGenre = await this.dbConnection.client.songgenres.update({
				where:{
					songId_genreId:{
						songId: where.songId,
						genreId: where.genreId
					}
				
				}, data});
	
			return songGenre;
		} catch (error) {
			return null;
		}
	}

	async get(where: SongGenre): Promise<SongGenreDTO | null>{
		if(!where)
			return null;

		const songGenre = await this.dbConnection.client.songgenres.findUnique({
			where:{
				songId_genreId:{
					songId: where.songId,
					genreId: where.genreId
				}

			}});
		return songGenre;
	}

	async delete(where: SongGenre): Promise<SongGenreDTO | null>{
		if(!where)
			return null;

		try{
			const songGenre = await this.dbConnection.client.songgenres.delete({
				where:{
					songId_genreId:{
						songId: where.songId,
						genreId: where.genreId
					}
				
				}});

			return songGenre;
		}catch(error){
			return null;
		}
	}
	
}