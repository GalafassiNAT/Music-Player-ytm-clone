import { PrismaConnection } from "./DBDAO.ts";
import { SongMoodDTO } from "../dtos/SongMoodDTO.ts";
import { SongMood } from "../models/SongMood.ts";

export class SongMoodDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: SongMoodDTO): Promise<SongMood>{
		const songMood = await this.dbConnection.client.songmoods.create({data: data});
		return songMood;
	}

	async update(where: SongMood, data: SongMoodDTO): Promise<SongMoodDTO | null>{
		if(!where)
			return null;

		try {
			const songMood = await this.dbConnection.client.songmoods.update({
				where:{
					songId_moodId:{
						moodId: where.moodId,
						songId: where.songId
					}
				
				}, data});

			return songMood;
		} catch (error) {
			return null;
		}
	}

	async get(where: SongMood): Promise<SongMoodDTO | null>{
		if(!where)
			return null;

		const songMood = await this.dbConnection.client.songmoods.findUnique({
			where:{
				songId_moodId:{
					moodId: where.moodId,
					songId: where.songId
				}

			}});

		return songMood;
	}

	async delete(where: SongMood): Promise<SongMoodDTO | null>{
		if(!where)
			return null;

		try{
			const songMood = await this.dbConnection.client.songmoods.delete({
				where:{
					songId_moodId:{
						moodId: where.moodId,
						songId: where.songId
					}

				}});

			return songMood;
		}catch(error){
			return null;
		}
	}

}