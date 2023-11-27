export class SongHistory{
	songId: string;
	historyId: string;
	createdAt: Date;

	constructor(songId: string, historyId: string, createdAt: Date){
		this.songId = songId;
		this.historyId = historyId;
		this.createdAt = createdAt;
	}
}