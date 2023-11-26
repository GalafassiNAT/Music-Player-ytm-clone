import { DAOManager } from "../daos/DAOManager";
import { AppError } from "../errors/AppError";
import { Request, Response } from "express";
import { SongDTO } from "../dtos/SongDTO";


export class SongController{

	static async create(req: Request, res: Response){
		const songDao = DAOManager.getInstance().songDAO;

		if(!req.body) throw new AppError("No information provided to create song");
		const DTO = req.body as SongDTO;
		const song = await songDao.create(DTO);
		if(!song) throw new AppError("Song already exists");
		res.status(200).json(song);
	}

}