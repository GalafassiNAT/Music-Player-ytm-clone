export class Likes{
	id: string;
	userId: string;
	songId: string;
	createdAt: Date;

	constructor(id: string, userId: string, songId: string, createdAt: Date){
		this.id = id;
		this.userId = userId;
		this.songId = songId;
		this.createdAt = createdAt;
	}
}