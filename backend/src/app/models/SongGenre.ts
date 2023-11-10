export class SongGenre{
	id: string;
	songId: string;
	genreId: string;
	createdAt: Date;

	constructor(id: string, songId: string, genreId: string, createdAt: Date){
		this.id = id;
		this.songId = songId;
		this.genreId = genreId;
		this.createdAt = createdAt;
	}
}