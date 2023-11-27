export class ArtistSong{
	artistId: string;
	songId: string;
	createdAt: Date;

	constructor(artistId: string, songId: string, createdAt: Date){
		this.artistId = artistId;
		this.songId = songId;
		this.createdAt = createdAt;	
	}

}