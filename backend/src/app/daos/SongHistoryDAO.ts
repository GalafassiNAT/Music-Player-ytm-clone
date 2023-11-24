import { PrismaConnection } from "./DBDAO";
import { SongHistoryDTO } from "../dtos/SongHistoryDTO";
import { SongHistory } from "../models/SongHistory";

export class SongHystoryDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: SongHistoryDTO): Promise<SongHistory>{
		const songHistory = await this.dbConnection.client.songhistories.create({data: data});
		return songHistory;
	}

	async update(where: SongHistory, data: SongHistoryDTO): Promise<SongHistoryDTO | null>{
		if(!where)
			return null;

		try {
			const songHistory = await this.dbConnection.client.songhistories.update({where, data});
			return songHistory;
		} catch (error) {
			return null;
		}
	}

	async get(where: SongHistory): Promise<SongHistoryDTO | null>{
		if(!where)
			return null;

		const songHistory = await this.dbConnection.client.songhistories.findUnique({where});
		return songHistory;
	}

	async delete(where: SongHistory): Promise<SongHistoryDTO | null>{
		if(!where)
			return null;

		try{
			const songHistory = await this.dbConnection.client.songhistories.delete({where});
			return songHistory;
		}catch(error){
			return null;
		}
	}

}