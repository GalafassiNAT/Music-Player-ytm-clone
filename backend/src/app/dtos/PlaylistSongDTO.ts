export class PlaylistSongDTO{
	playlistId: string;
	songId: string;
	createdAt: Date;
	upddatedAt: Date;

	constructor(playlistId: string, songId: string, createdAt: Date, updatedAt: Date){
		this.playlistId = playlistId;
		this.songId = songId;
		this.createdAt = createdAt;
		this.upddatedAt = updatedAt;
	}
}