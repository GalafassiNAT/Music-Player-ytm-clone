import { Artist } from "./Artist";
import { Song } from "./Song";
import { totalDuration } from "./Utils";


export class Album{
	id: string;
	name: string;
	artist: Artist;
	duration: number;
	description: string;
	image: string;
	releaseDate: Date;
	createdAt: Date;
	updatedAt: Date;
	songs: Song[];
	
	constructor(id: string, name: string, artist: Artist, description: string, image: string, releaseDate: Date, createdAt: Date, updatedAt: Date, songs: Song[]){
		this.id = id;
		this.name = name;
		this.artist = artist;
		this.duration = totalDuration(songs) || 0;
		this.songs = songs || [];
		this.description = description;
		this.image = image;
		this.releaseDate = releaseDate;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}