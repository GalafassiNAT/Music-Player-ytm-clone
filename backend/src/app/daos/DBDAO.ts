import { PrismaClient } from "@prisma/client";


export interface DBConnectionInterface{
	connect(): void;
}

export class PrismaConnection implements DBConnectionInterface{
	private readonly prisma: PrismaClient;

	constructor(prisma: PrismaClient){
		this.prisma = prisma;
	}

	connect(): void{
		this.prisma.$connect();
	}

	get client(): PrismaClient{
		return this.prisma;
	}
}

