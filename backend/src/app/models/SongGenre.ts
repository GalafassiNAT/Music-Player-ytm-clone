export class SongGenre{
	songId: string;
	genreId: string;
	createdAt: Date;

	constructor(songId: string, genreId: string, createdAt: Date){
		this.songId = songId;
		this.genreId = genreId;
		this.createdAt = createdAt;
	}
}