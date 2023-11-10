export class PlaylistSong{
	id: string;
	playlistId: string;
	songId: string;
	createdAt: Date;

	constructor(id: string, playlistId: string, songId: string, createdAt: Date){
		this.id = id;
		this.playlistId = playlistId;
		this.songId = songId;
		this.createdAt = createdAt;
	}
}