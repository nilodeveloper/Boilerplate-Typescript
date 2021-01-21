import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from '../database/entity/Post';
import Auth from '../middlewares/auth';
import * as jwt from "jsonwebtoken";

class PostController{	
	async index(req: Request, res: Response){	
		return res.json({status: "operação realizada com sucesso"})
	}

	async save(req: Request, res: Response){	
		return res.json({status: "operação realizada com sucesso"})
	}

	async update(req: Request, res: Response){
		return res.json({status: "operação realizada com sucesso"})
	}
}

export default new PostController()
