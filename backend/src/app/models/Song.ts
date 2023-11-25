import {Artist} from "./Artist";
export class Song{
	id: string;
	name: string;
	duration: number;
	albumId: string;
	description: string;
	contentURL: string;
	cover: string;
	numberOfLikes: number;
	releaseDate: Date; 
	filePath: string;
	createdAt: Date;
	updatedAt: Date;
	artists: Artist[];

	constructor(id: string, name: string, duration: number, albumId: string, description: string, contentURL: string, cover: string,numberOfLikes: number, releaseDate: Date, filePath: string, createdAt: Date, updatedAt: Date, artists: Artist[]){
		this.id = id;
		this.name = name;
		this.duration = duration;
		this.albumId = albumId;
		this.description = description;
		this.contentURL = contentURL;
		this.cover = cover;
		this.numberOfLikes = numberOfLikes;
		this.releaseDate = releaseDate;
		this.filePath = filePath;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.artists = artists;
	}

	static totalDuration(songs: Song[]): number{
		let totalDuration = 0;
		songs.forEach(song => {
			totalDuration += song.duration;
		});
		return totalDuration;
	}

}