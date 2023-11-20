import { Song } from "./Song";

export class PlaylistSong{
	id: string;
	playlistId: string;
	song: Song;
	songId: string;
	createdAt: Date;

	constructor(id: string, playlistId: string, song: Song, songId: string, createdAt: Date){
		this.id = id;
		this.playlistId = playlistId;
		this.songId = songId;
		this.song = song;
		this.song.id = songId;
		this.createdAt = createdAt;
	}
}