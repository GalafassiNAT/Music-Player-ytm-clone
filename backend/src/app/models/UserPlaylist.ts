export class UserPlaylist{
	id: string;
	userId: string;
	playlistId: string;
	createdAt: Date;

	constructor(id: string, userId: string, playlistId: string, createdAt: Date){
		this.id = id;
		this.userId = userId;
		this.playlistId = playlistId;
		this.createdAt = createdAt;	
	}
}