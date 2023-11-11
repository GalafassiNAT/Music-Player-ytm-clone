export class UserPlaylistDTO{
	userId: string;
	playlistId: string;
	createdAt: Date;

	constructor(userId: string, playlistId: string, createdAt: Date){
		this.userId = userId;
		this.playlistId = playlistId;
		this.createdAt = createdAt;	
	}
}