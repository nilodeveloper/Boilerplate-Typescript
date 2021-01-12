import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from '../database/entity/User';
import Auth from '../middlewares/auth';
import * as jwt from "jsonwebtoken";

class UserController{	
	async index(req: Request, res: Response){	
		const user = await getRepository(User).createQueryBuilder("user")
		.select(["username"]).getRawMany();

		return res.json(user)
	}

	async save(req: Request, res: Response){	
		const repository = getRepository(User);
		const { username, email, password } = req.body;
		const user = repository.create({ username, email, password });
		await repository.save(user);
		const token = jwt.sign({username: username, password: password}, process.env.SECRET);
		console.log('token', token)
		return res.json(user);
	}

	async update(req: Request, res: Response){
		const { email, username } = req.body;
		const repository = getRepository(User).createQueryBuilder()
    .update(User)
    .set({ email: email })
    .where("username = :username", { username: username })
    .execute();
		
		return res.json({status: "operação realizada com sucesso"})
	}

	async login(req: Request, res: Response, next: any){
		new Auth(req, res, next);
		res.json({login: true})
	}
}

export default UserController;
