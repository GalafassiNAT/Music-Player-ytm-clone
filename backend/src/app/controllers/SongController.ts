import { DAOManager } from "../daos/DAOManager.ts";
import { AppError } from "../errors/AppError.ts";
import { Request, Response } from "express";
import { SongDTO } from "../dtos/SongDTO.ts";


export class SongController{

	static async create(req: Request, res: Response){
		const songDao = DAOManager.getInstance().songDAO;

		if(!req.body) throw new AppError("No information provided to create song");
		const DTO = req.body as SongDTO;
		
		const song = await songDao.create(DTO);
		if(!song) throw new AppError("Song already exists");
		res.status(200).json(song);
	}

	static async updateById(req: Request, res: Response){
		const songDao = DAOManager.getInstance().songDAO;

		const where = req.params.id;
		if(!req.body) throw new AppError("No information provided to update song");
		const DTO = req.body as SongDTO;
		const song = await songDao.update({id: where},DTO);
		if(!song) throw new AppError("Song does not exist");
		res.status(200).json(song);
	}

	static async getWhere(req: Request, res: Response){
		const songDao = DAOManager.getInstance().songDAO;

		const song = await songDao.get(req.body);
		if(!song) throw new AppError("Song does not exist");
		res.status(200).json(song);
	}

	static async getAll(req: Request, res: Response){
		const songDao = DAOManager.getInstance().songDAO;

		const songs = await songDao.getAll();
		if(!songs) throw new AppError("No songs found");
		res.status(200).json(songs);
	}

	static async getAllWhere(req: Request, res: Response){
		const songDao = DAOManager.getInstance().songDAO;

		const songs = await songDao.getAllWhere(req.body);
		if(!songs) throw new AppError("No songs found");
		res.status(200).json(songs);
	}

	static async deleteById(req: Request, res: Response){
		const songDao = DAOManager.getInstance().songDAO;

		const song = await songDao.delete({id: req.params.id});
		if(!song) throw new AppError("Song does not exist");
		res.status(200).json(song);
	}

}