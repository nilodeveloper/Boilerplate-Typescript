import express from "express";
import PostRouter from "./routes/PostRouter";
import UserRouter from "./routes/UserRouter";
import HealthcheckRouter from "./routes/HealthcheckRouter";

export default class Router{
	route: any;
	swaggerUi = require('swagger-ui-express');
	swaggerDocument = require('./swagger.json');

	constructor(){
		this.route = express();
		return this.routes();
	}

	healthcheck() {
		return HealthcheckRouter;
	}

	user() {	
		return UserRouter;
	}

	post() {
		return PostRouter;
	}

	swagger(){
		return [
			this.route.use('/swagger', this.swaggerUi.serve),
			this.route.get('/swagger', this.swaggerUi.setup(this.swaggerDocument))
		]
	}

	routes(): any{
		return [
			this.healthcheck(),
			this.user(),
			this.post(),
			this.swagger(),
		]
	}
}
