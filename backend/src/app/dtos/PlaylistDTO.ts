export class PlaylistDTO{
	name: string;
	image: string;
	userId: string;
	duration: number;
	description: string;
	songCount: number;
	isPublic: boolean;
	createdAt: Date;
	updatedAt: Date;

	constructor(name: string, image: string, userId: string, duration: number, description: string, songCount: number, isPublic: boolean, createdAt: Date, updatedAt: Date){
		this.name = name;
		this.image = image;
		this.userId = userId;
		this.duration = duration;
		this.description = description;
		this.songCount = songCount;
		this.isPublic = isPublic;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}