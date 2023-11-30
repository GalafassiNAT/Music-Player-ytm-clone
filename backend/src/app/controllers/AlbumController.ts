import { DAOManager } from "../daos/DAOManager.ts";
import { AppError } from "../errors/AppError.ts";	
import { Request, Response } from "express";
import { AlbumDTO } from "../dtos/AlbumDTO.ts";
import { Album } from "../models/Album.ts";

export class AlbumController{

	static async create(req: Request, res: Response){
		const albumDAO = DAOManager.getInstance().albumDAO;

		if(!req.body) throw new AppError("No information provided to create album");
		const model = req.body as Album;
		const album = await albumDAO.create(model);
		if(!album) throw new AppError("Album already exists");

		res.status(200).json(album);

	}

	static async updateById(req: Request, res: Response){
		const albumDAO = DAOManager.getInstance().albumDAO;
		
		const model = req.body as AlbumDTO;
		const updatedAlbum = await albumDAO.update({id: req.params.id}, model);
		if(!updatedAlbum) throw new AppError("Album not found");
		res.status(200).json(updatedAlbum);
	}


	static async get(req: Request, res: Response){
		const albumDAO = DAOManager.getInstance().albumDAO;
		const criteria: Partial<Album> = {};

		if(req.params.id) 
			criteria.id = req.params.id;
		else if(req.params.name)
			criteria.name = req.params.name;
		else throw new AppError("No criteria provided to get album");

		const album = await albumDAO.get(criteria);
		if(!album) throw new AppError("Album not found");
		res.status(200).json(album);
	}


	static async getAll(req: Request, res: Response){
		const albumDAO = DAOManager.getInstance().albumDAO;

		const albums = await albumDAO.getAll();
		res.status(200).json(albums);
	}

	static async getAllWhere(req: Request, res: Response){
		const albumDAO = DAOManager.getInstance().albumDAO;

		const albums = await albumDAO.getAllWhere(req.body);
		res.status(200).json(albums);

	}

	static async deleteById(req: Request, res: Response){
		const albumDAO = DAOManager.getInstance().albumDAO;
		const deletedAlbum = await albumDAO.delete({id: req.params.id});
		res.status(200).json(deletedAlbum);
	}


}
