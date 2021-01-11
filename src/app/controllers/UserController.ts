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
		const { username, email, password } = req.body;
		const user = repository.create({ username, email, password });
		await repository.save(user);

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
}

export default UserController;
