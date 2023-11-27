export class Likes{
	userId: string;
	songId: string;
	createdAt: Date;

	constructor(userId: string, songId: string, createdAt: Date){
		this.userId = userId;
		this.songId = songId;
		this.createdAt = createdAt;
	}
}