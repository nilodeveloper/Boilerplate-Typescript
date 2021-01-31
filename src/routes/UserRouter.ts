import express, { Request, Response } from "express";
import UserController from "../controllers/UserController";

class UserRouter{
	
	router: any;			

	constructor(){
		this.router = express();
		return this.routes();
	}

	index(){
		return this.router.get('/users', UserController.index)
	}

	save(){
		return this.router.post('/register/user', UserController.save)
	}

	update(){
		return this.router.put('/update/user', UserController.update)
	}

	login(){
		return this.router.post('/login/user', UserController.login)
	}

	routes(): any{
		return [
			this.index(),
			this.save(),
			this.update(),
			this.login()
		];
	}
}

export default new UserRouter();
