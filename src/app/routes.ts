import express from "express";
import UserRouter from "./routes/UserRouter";

export default class Router{
	route: any;

	constructor(){
		this.route = express();
		return this.routes();
	}

	user() {	
		return UserRouter;
	}

	routes(): any{
		return [
			this.user()
		]
	}
}
