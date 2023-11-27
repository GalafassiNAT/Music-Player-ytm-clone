export class UserPlaylist{
	userId: string;
	playlistId: string;
	createdAt: Date;

	constructor(id: string, userId: string, playlistId: string, createdAt: Date){
		this.userId = userId;
		this.playlistId = playlistId;
		this.createdAt = createdAt;	
	}
}