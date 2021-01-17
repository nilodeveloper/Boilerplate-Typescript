import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from '../database/entity/Post';
import Auth from '../middlewares/auth';
import * as jwt from "jsonwebtoken";

class PostController{	
	async index(req: Request, res: Response){	
		const post = await getRepository(Post).createQueryBuilder("post")
		.select(["id"]).getRawMany();

		return res.json(post)
	}

	async save(req: Request, res: Response){	
		const repository = getRepository(Post);
		const { id } = req.body;
		const post = repository.create({ id });
		await repository.save(post);
		return res.json(post);
	}

	async update(req: Request, res: Response){
		const { id } = req.body;
		const repository = getRepository(Post).createQueryBuilder()
    .update(Post)
    .set({ column: id })
    .where("id = :id", { id: 'test' })
    .execute();
		
		return res.json({status: "operação realizada com sucesso"})
	}
}

export default new PostController()
