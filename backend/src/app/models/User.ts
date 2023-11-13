export class User{
	id : string;
	userName: string;
	email: string;
	password: string;
	about: string;
	dateOfBirth: Date;
	createdAt: Date;
	updatedAt: Date;
	profilePicture: string;

	constructor(id: string, userName: string, email: string, password: string, about: string, dateOfBirth: Date, createdAt: Date, updatedAt: Date, profilePicture: string){
		this.id = id;
		this.userName = userName || "";
		this.email = email || "";
		this.password = password || "";
		this.about = about || "";
		this.dateOfBirth = dateOfBirth || new Date();
		this.createdAt = createdAt 	|| new Date();
		this.updatedAt = updatedAt || new Date();
		this.profilePicture = profilePicture || "";
	}
}