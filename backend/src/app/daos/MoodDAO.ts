import { PrismaConnection } from "./DBDAO.ts";
import { MoodDTO } from "../dtos/MoodDTO.ts";
import { Mood } from "../models/Mood.ts";

export class MoodDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: MoodDTO): Promise<Mood>{
		const mood = await this.dbConnection.client.mood.create({data: data});
		return mood;
	}

	async update(where: Mood, data: MoodDTO): Promise<MoodDTO | null>{
		if(!where)
			return null;

		try {
			const mood = await this.dbConnection.client.mood.update({where, data});
			return mood;
		} catch (error) {
			return null;
		}
	}

	async get(where: Mood): Promise<MoodDTO | null>{
		if(!where)
			return null;

		const mood = await this.dbConnection.client.mood.findUnique({where});
		return mood;
	}

	async delete(where: Mood): Promise<MoodDTO | null>{
		if(!where)
			return null;

		try{
			const mood = await this.dbConnection.client.mood.delete({where});
			return mood;
		}catch(error){
			return null;
		}
	}


}