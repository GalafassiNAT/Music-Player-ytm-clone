import { PrismaClient } from "@prisma/client";


export interface DBConnectionInterface{
	connect(): void;
}

export class PrismaConnection implements DBConnectionInterface{
	private static instance: PrismaConnection;
	private readonly prisma: PrismaClient;

	private constructor(prisma: PrismaClient){
		this.prisma = prisma;
		this.connect();
	}

	public static getInstance(): PrismaConnection{

		if(!PrismaConnection.instance){
			PrismaConnection.instance = new PrismaConnection(new PrismaClient());
		}
		return PrismaConnection.instance;
	}

	connect(): void{
		this.prisma.$connect();
	}

	get client(): PrismaClient{
		return this.prisma;
	}
}

