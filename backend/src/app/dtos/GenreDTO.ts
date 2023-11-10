export class GenreDTO{
	name: string;
	createdAt: Date;

	constructor(name: string, createdAt: Date){
		this.name = name;
		this.createdAt = createdAt;
	}
}