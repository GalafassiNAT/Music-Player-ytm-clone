export class ArtistDTO{
	name: string;
	about: string;
	createdAt: Date;
	updatedAt: Date;
	profilePicture: string;
	numberOfFollowers: number;

	constructor(name: string, about: string, createdAt: Date, updatedAt: Date, profilePicture: string, numberOfFollowers: number){
		this.name = name;
		this.about = about;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.profilePicture = profilePicture;
		this.numberOfFollowers = numberOfFollowers;
	}
}