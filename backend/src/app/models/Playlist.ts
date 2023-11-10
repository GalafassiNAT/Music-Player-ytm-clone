export class Playlist{
	id: string;
	name: string;
	image: string;
	userId: string;
	description: string;
	songCount: number;
	isPublic: boolean;
	createdAt: Date;
	updatedAt: Date;

	constructor(id: string, name: string, image: string, userId: string, description: string, songCount: number, isPublic: boolean, createdAt: Date, updatedAt: Date){
		this.id = id;
		this.name = name;
		this.image = image;
		this.userId = userId;
		this.description = description;
		this.songCount = songCount;
		this.isPublic = isPublic;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}