import express, {Request, Response} from "express";

class UserController{
	constructor(){
	
	}
	
	index(req: Request, res: Response){	
		res.send('Heyyy users here!')
	}

	save(req: Request, res: Response){	
		res.send('Users save! Thx!')
	}
}

export default UserController;

