import { DAOManager } from "../daos/DAOManager.ts";
import { AppError } from "../errors/AppError.ts";
import { Request, Response } from "express";
import { ArtistDTO } from "../dtos/ArtistDTO.ts";
// import { Artist } from "../models/Artist";


export class ArtistController{

	async create(req: Request, res: Response){
		const artistDAO = DAOManager.getInstance().artistDAO;

		if(!req.body) throw new AppError("No information provided to create artist");
		const DTO = req.body as ArtistDTO;
		const artist = await artistDAO.create(DTO);
		res.status(200).json(artist);

	}

	async updateById(req: Request, res: Response){
		const artistDAO = DAOManager.getInstance().artistDAO;
		
		const DTO = req.body as ArtistDTO;
		
		const updatedArtist = await artistDAO.update({id: req.params.id}, DTO);
		if(!updatedArtist) throw new AppError("Artist not found");
		res.status(200).json(updatedArtist);
	}

	async getById(req: Request, res: Response){
		const artistDAO = DAOManager.getInstance().artistDAO;

		const artist = await artistDAO.get({id: req.params.id});
		if(!artist) throw new AppError("Artist not found");
		res.status(200).json(artist);
	}

	async getByName(req: Request, res: Response){
		const artistDAO = DAOManager.getInstance().artistDAO;

		const artist = await artistDAO.get({name: req.params.name});
		if(!artist) throw new AppError("Artist not found");
		res.status(200).json(artist);
	}

	async getAll(req: Request, res: Response){
		const artistDAO = DAOManager.getInstance().artistDAO;

		const artists = await artistDAO.getAll();
		res.status(200).json(artists);
	}

	async getAllWhere(req: Request, res: Response){
		const artistDAO = DAOManager.getInstance().artistDAO;

		const artists = await artistDAO.getAllWhere(req.body);
		res.status(200).json(artists);
	}

	async deleteById(req: Request, res: Response){
		const artistDAO = DAOManager.getInstance().artistDAO;
		const deletedArtist = await artistDAO.delete({id: req.params.id});
		if(!deletedArtist) throw new AppError("Artist not found");
		
		res.status(200).json(deletedArtist);
	}

}