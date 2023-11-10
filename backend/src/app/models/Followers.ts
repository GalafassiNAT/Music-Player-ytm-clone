export class Followers{
	id: string;
	userId: string;
	artistId: string;
	createdAt: Date;
	updatedAt: Date;	

	constructor(id: string, userId: string, artistId: string, createdAt: Date, updatedAt: Date){
		this.id = id;
		this.userId = userId;
		this.artistId = artistId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

}