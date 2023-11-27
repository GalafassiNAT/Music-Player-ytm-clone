import { PrismaConnection } from "./DBDAO.ts";
import { SongHistoryDTO } from "../dtos/SongHistoryDTO.ts";
import { SongHistory } from "../models/SongHistory.ts";

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
			const songHistory = await this.dbConnection.client.songhistories.update({
				where:{
					songId_historyId:{
						historyId: where.historyId,
						songId: where.songId
					}
				}, data});
			return songHistory;
		} catch (error) {
			return null;
		}
	}

	async get(where: SongHistory): Promise<SongHistoryDTO | null>{
		if(!where)
			return null;

		const songHistory = await this.dbConnection.client.songhistories.findUnique({
			where:{
				songId_historyId:{
					historyId: where.historyId,
					songId: where.songId
				}
			}});

		return songHistory;
	}

	async delete(where: SongHistory): Promise<SongHistoryDTO | null>{
		if(!where)
			return null;

		try{
			const songHistory = await this.dbConnection.client.songhistories.delete({
				where:{
					songId_historyId:{
						historyId: where.historyId,
						songId: where.songId
					}
				}});
				
			return songHistory;
		}catch(error){
			return null;
		}
	}

}