import { Song } from "./Song";

export class PlaylistSong{
	playlistId: string;
	song?: Song;
	songId: string;
	createdAt: Date;
	updatedAt: Date;

	constructor(playlistId: string, song: Song, songId: string, createdAt: Date, updatedAt: Date){
		this.playlistId = playlistId;
		this.songId = songId;
		this.song = song || null;
		this.song.id = songId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}