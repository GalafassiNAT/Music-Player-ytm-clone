export class FollowersDTO{
	userId: string;
	artistId: string;
	createdAt: Date;
	updatedAt: Date;	

	constructor(userId: string, artistId: string, createdAt: Date, updatedAt: Date){
		this.userId = userId;
		this.artistId = artistId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

}