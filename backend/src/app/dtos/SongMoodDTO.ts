export class SongMoodDTO{
	songId: string;
	moodId: string;
	createdAt: Date;

	constructor(songId: string, moodId: string, createdAt: Date){
		this.songId = songId;
		this.moodId = moodId;
		this.createdAt = createdAt;
	}
}