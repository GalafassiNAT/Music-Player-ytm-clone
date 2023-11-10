export class AlbumDTO{
	name: string;
	artistId: string;
	description: string;
	image: string;
	releaseDate: Date;
	createdAt: Date;
	UpdatedAt: Date;

	constructor(name: string, artistId: string, description: string, image: string, releaseDate: Date, createdAt: Date, updatedAt: Date){
		this.name = name;
		this.artistId = artistId;
		this.description = description;
		this.image = image;
		this.releaseDate = releaseDate;
		this.createdAt = createdAt;
		this.UpdatedAt = updatedAt;
	}
}