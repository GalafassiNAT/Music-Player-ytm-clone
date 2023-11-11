export class HistoryDTO{
	userId: string;
	createdAt: Date;
	updatedAt: Date;

	constructor(userId: string, createdAt: Date, updatedAt: Date){	
		this.userId = userId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}