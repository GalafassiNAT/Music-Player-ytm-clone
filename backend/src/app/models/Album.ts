export class Album{
	id: string;
	name: string;
	artistId: string;
	description: string;
	image: string;
	releaseDate: Date;
	createdAt: Date;
	UpdatedAt: Date;

	constructor(id: string, name: string, artistId: string, description: string, image: string, releaseDate: Date, createdAt: Date, updatedAt: Date){
		this.id = id;
		this.name = name;
		this.artistId = artistId;
		this.description = description;
		this.image = image;
		this.releaseDate = releaseDate;
		this.createdAt = createdAt;
		this.UpdatedAt = updatedAt;
	}
}