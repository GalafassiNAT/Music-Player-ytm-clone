import { Artist } from "./Artist";
import { Song } from "./Song";

export class Album{
	id: string;
	name: string;
	artistId: string;
	artist: Artist;
	duration: number;
	description: string;
	image: string;
	releaseDate: Date;
	createdAt: Date;
	updatedAt: Date;
	songs: Song[];
	
	constructor(id: string, name: string, artistId: string, artist: Artist, description: string, image: string, releaseDate: Date, createdAt: Date, updatedAt: Date, songs: Song[]){
		this.id = id;
		this.name = name;
		this.artist = artist || null;
		this.artistId = artistId;
		this.songs = songs || [];
		this.duration = Song.totalDuration(this.songs); 
		this.description = description;
		this.image = image;
		this.releaseDate = releaseDate;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}