import { PlaylistSong as playlistSongs } from "./PlaylistSong.ts";
import { User } from "./User.ts";
import { DAOManager } from "../daos/DAOManager.ts";

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
	songs: playlistSongs[];
	owner: User;	

	
	constructor(id: string, name: string, image: string, userId: string, description: string, songCount: number, isPublic: boolean, createdAt: Date, updatedAt: Date, songs: playlistSongs[], owner: User){
		this.id = id;
		this.name = name;
		this.image = image;
		this.userId = userId;
		this.owner = owner;
		this.owner.id = userId;
		this.description = description;
		this.songs = songs || [];
		this.songCount = this.songs.length || songCount;
		this.isPublic = isPublic !== undefined ? isPublic : true;
		this.duration = 0;
		this.isPublic = isPublic || true;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}


	async getTotalDuration(){
		let totalDuration = 0;
		for(let i = 0; i < this.songs.length; i++){
			const song = await DAOManager.getInstance().songDAO.get({id: this.songs[i].songId});
			if(!song) return 0;
			totalDuration += song.duration;
		}
		return totalDuration;
	}

	async initialize(){
		this.duration = await this.getTotalDuration();
	}

}