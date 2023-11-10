export class ArtistSong{
	id: string;
	artistId: string;
	songId: string;
	createdAt: Date;

	constructor(id: string, artistId: string, songId: string, createdAt: Date){
		this.id = id;
		this.artistId = artistId;
		this.songId = songId;
		this.createdAt = createdAt;	
	}

}