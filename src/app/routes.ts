import express from "express";
import PostRouter from "./routes/PostRouter";
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

post(){return PostRouter;}
	routes(): any{
		return [
			this.user(),
this.post(),
		]
	}
}
