import { Song } from "./Song";	
import { totalDuration } from "./Utils";


export class Playlist{
	id: string;
	name: string;
	image: string;
	userId: string;
	duration: number;
	description: string;
	songCount: number;
	isPublic: boolean;
	createdAt: Date;
	updatedAt: Date;	
	songs: Song[];

	
	constructor(id: string, name: string, image: string, userId: string, description: string, songCount: number, isPublic: boolean, createdAt: Date, updatedAt: Date, songs: Song[]){
		this.id = id;
		this.name = name;
		this.image = image;
		this.userId = userId;
		this.description = description;
		this.songs = songs || [];
		this.songCount = this.songs.length || songCount;
		this.duration = totalDuration(this.songs) || 0;
		this.isPublic = isPublic || true;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}




}