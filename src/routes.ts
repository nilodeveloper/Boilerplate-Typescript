import express from "express";
import PostRouter from "./routes/PostRouter";
import UserRouter from "./routes/UserRouter";
import HealthcheckRouter from "./routes/HealthcheckRouter";
import SwaggerRouter from "./routes/SwaggerRouter";

export default class Router{
	route: any;

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
		return SwaggerRouter;
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
