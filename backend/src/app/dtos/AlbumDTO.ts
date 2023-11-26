export class AlbumDTO{
	name: string;
	artistId: string;
	description: string;
	duration: number;
	image: string;
	releaseDate: Date;
	createdAt: Date;
	updatedAt: Date;
	songCount: number;
	songs: string[];

	constructor(name: string, artistId: string, description: string, duration: number, image: string, releaseDate: Date, createdAt: Date, updatedAt: Date, songCount: number, songs: string[]){
		this.name = name;
		this.artistId = artistId;
		this.duration = duration;
		this.description = description;
		this.image = image;
		this.releaseDate = releaseDate;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.songCount = songCount;
		this.songs = songs;

	}
}