export class SongHistory{
	id: string;
	songId: string;
	historyId: string;
	createdAt: Date;

	constructor(id: string, songId: string, historyId: string, createdAt: Date){
		this.id = id;
		this.songId = songId;
		this.historyId = historyId;
		this.createdAt = createdAt;
	}
}