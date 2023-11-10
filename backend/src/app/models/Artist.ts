export class Artist{
	id: string;
	name: string;
	about: string;
	createdAt: Date;
	updatedAt: Date;
	profilePicture: string;
	numberOfFollowers: number;

	constructor(id: string, name: string, about: string, createdAt: Date, updatedAt: Date, profilePicture: string, numberOfFollowers: number){
		this.id = id;
		this.name = name;
		this.about = about;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.profilePicture = profilePicture;
		this.numberOfFollowers = numberOfFollowers;
	}
}