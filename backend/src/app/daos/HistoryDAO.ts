import { PrismaConnection } from "./DBDAO.ts";
import { HistoryDTO } from "../dtos/HistoryDTO.ts";
import { History } from "../models/History.ts";

export class HistoryDAO{
	dbConnection: PrismaConnection;
	
	constructor(){
		this.dbConnection = PrismaConnection.getInstance();
	}


	async create(data: HistoryDTO): Promise<History>{
		const history = await this.dbConnection.client.history.create({data: data});
		return history;
	}

	async update(where: History, data: HistoryDTO): Promise<HistoryDTO | null>{
		if(!where)
			return null;

		try {
			const history = await this.dbConnection.client.history.update({where, data});
			return history;
		} catch (error) {
			return null;
		}
	}

	async get(where: History): Promise<HistoryDTO | null>{
		if(!where)
			return null;

		const history = await this.dbConnection.client.history.findUnique({where});
		return history;
	}

	async delete(where: History): Promise<HistoryDTO | null>{
		if(!where)
			return null;

		try{
			const history = await this.dbConnection.client.history.delete({where});
			return history;
		}catch(error){
			return null;
		}
	}
	
}