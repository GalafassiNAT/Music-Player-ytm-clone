export class SongDTO{
	name: string;
	duration: number;
	albumId: string;
	description: string;
	contentURL: string;
	numberOfLikes: number;
	releaseDate: Date; 
	filePath: string;
	createdAt: Date;
	updatedAt: Date;

	constructor(name: string, duration: number, albumId: string, description: string, contentURL: string, numberOfLikes: number, releaseDate: Date, filePath: string, createdAt: Date, updatedAt: Date){
		this.name = name;
		this.duration = duration;
		this.albumId = albumId;
		this.description = description;
		this.contentURL = contentURL;
		this.numberOfLikes = numberOfLikes;
		this.releaseDate = releaseDate;
		this.filePath = filePath;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}