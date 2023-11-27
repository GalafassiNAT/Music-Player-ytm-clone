import { Artist } from "./Artist.ts";
import { Song } from "./Song.ts";

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
	songCount: number;
	
	constructor(id: string, name: string, artistId: string, artist: Artist, description: string, image: string, releaseDate: Date, createdAt: Date, updatedAt: Date, songs: Song[], songCount: number){
		this.id = id;
		this.name = name;
		this.artist = artist || null;
		this.artistId = artistId;
		this.songs = songs || [];
		this.songCount = this.songs.length || songCount;
		this.duration = Song.totalDuration(this.songs); 
		this.description = description;
		this.image = image;
		this.releaseDate = releaseDate;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}