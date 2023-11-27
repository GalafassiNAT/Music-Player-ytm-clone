export class PlaylistSong{
	playlistId: string;
	songId: string;
	createdAt: Date;
	updatedAt: Date;

	constructor(playlistId: string, songId: string, createdAt: Date, updatedAt: Date){
		this.playlistId = playlistId;
		this.songId = songId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}