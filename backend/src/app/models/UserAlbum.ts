export class UserAlbum{
	id: string;
	userId: string;
	albumId: string;
	createdAt: Date;

	constructor(id: string, userId: string, albumId: string, createdAt: Date){
		this.id = id;
		this.userId = userId;
		this.albumId = albumId;
		this.createdAt = createdAt;	
	}
}