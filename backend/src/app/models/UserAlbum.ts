export class UserAlbum{
	userId: string;
	albumId: string;
	createdAt: Date;

	constructor(userId: string, albumId: string, createdAt: Date){
		this.userId = userId;
		this.albumId = albumId;
		this.createdAt = createdAt;	
	}
}