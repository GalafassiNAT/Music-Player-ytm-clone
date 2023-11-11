export class SongMood{
	id: string;
	songId: string;
	moodId: string;
	createdAt: Date;

	constructor(id: string, songId: string, moodId: string, createdAt: Date){
		this.id = id;
		this.songId = songId;
		this.moodId = moodId;
		this.createdAt = createdAt;
	}
}