import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from '../database/entity/User';

class UserController{	
	async index(req: Request, res: Response){	
		const user = await getRepository(User).createQueryBuilder("user")
		.select(["username"]).getRawMany();
		return res.json(user)
	}

	async save(req: Request, res: Response){	
		const repository = getRepository(User);
		const { username, password } = req.body;
		const user = repository.create({ username, password });
		await repository.save(user);

		return res.json(user);

	}
}

export default UserController;
