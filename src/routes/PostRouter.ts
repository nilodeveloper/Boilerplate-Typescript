import express, { Request, Response } from "express";
import PostController from "../controllers/PostController";

class PostRouter{
	
	router: any;			

	constructor(){
		this.router = express();
		return this.routes();
	}

	index(){
		return this.router.get('/post', PostController.index)
	}

	save(){
		return this.router.post('/register/post', PostController.save)
	}

	update(){
		return this.router.put('/update/post', PostController.update)
	}

	routes(): any{
		return [
			this.index(),
			this.save(),
			this.update(),
		];
	}
}

export default new PostRouter();
