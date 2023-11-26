import { PlaylistSong as playlistSongs } from "./PlaylistSong";
import { User } from "./User";
import { Song } from "./Song";


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
		
		this.duration = Song.totalDuration(this.songs.map(playlistSongs => playlistSongs.song)) || 0;
		this.isPublic = isPublic || true;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}




}