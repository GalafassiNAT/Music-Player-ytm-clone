export class Artist{
	id: string;
	name: string;
	about: string;
	createdAt: Date;
	updatedAt: Date;
	profilePicture: string;
	private numberOfFollowers: number;

	constructor(id: string, name: string, about: string, createdAt: Date, updatedAt: Date, profilePicture: string){
		this.id = id;
		this.name = name;
		this.about = about;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.profilePicture = profilePicture;
		this.numberOfFollowers = 0;
	}

	incrementFollowers(){
		this.numberOfFollowers++;
	}

	decrementFollowers(){
		if(this.numberOfFollowers > 0)
			this.numberOfFollowers--;
	}

	getNumberOfFollowers(){
		return this.numberOfFollowers;
	}

	setNumberOfFollowers(numberOfFollowers: number){
		this.numberOfFollowers = numberOfFollowers;
	}

}