import express, { Request, Response } from "express";
import UserController from "../controllers/UserController";

class UserRouter{
	
	router: any;			
	userController: UserController;

	constructor(){
		this.router = express();
		this.userController = new UserController();
		return this.routes();
	}

	index(){
		return this.router.get('/users', this.userController.index)
	}

	save(){
		return this.router.post('/register/user', this.userController.save)
	}

	routes(): any{
		return [
			this.index(),
			this.save()
		];
	}
}

export default new UserRouter();
