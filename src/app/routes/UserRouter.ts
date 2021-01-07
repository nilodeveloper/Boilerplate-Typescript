import express, { Request, Response } from "express";

class UserRouter{
	router: any;			

	constructor(){
		this.router = express();
		return this.routes();
	}

	index(){
		return this.router.get('/users', (req: Request, res: Response)=>{
			return res.send('Users!')
		})
	}

	save(){
		return this.router.get('/register/user', (req: Request, res: Response)=>{
			return res.send('Registrar Users!')
		})
	}

	routes(): any{
		return [
			this.index(),
			this.save()
		]
	}
}

export default UserRouter;
