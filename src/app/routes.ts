import express from "express";
import PostRouter from "./routes/PostRouter";
import UserRouter from "./routes/UserRouter";

export default class Router{
	route: any;
	swaggerUi = require('swagger-ui-express');
	swaggerDocument = require('./swagger.json');
	
	constructor(){
		this.route = express();
		return this.routes();
	}

	swagger(){
		return [
			this.route.use('/swagger', this.swaggerUi.serve),
			this.route.get('/swagger', this.swaggerUi.setup(this.swaggerDocument))
		]
	}

	user() {	
		return UserRouter;
	}

post(){return PostRouter;}
	routes(): any{
		return [
			this.user(),
			this.post(),
			this.swagger(),
		]
	}
}
