export class PlaylistSongDTO{
	playlistId: string;
	songId: string;
	createdAt: Date;

	constructor(playlistId: string, songId: string, createdAt: Date){
		this.playlistId = playlistId;
		this.songId = songId;
		this.createdAt = createdAt;
	}
}