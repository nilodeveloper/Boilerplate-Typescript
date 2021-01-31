import express from "express";

class HealthcheckRouter{
	
    router: any;			
    swaggerUi = require('swagger-ui-express');
	swaggerDocument = require('./../../swagger.json');

	constructor(){
		this.router = express();
		return this.routes();
	}

	index(){
		return [
            this.router.use('/swagger', this.swaggerUi.serve),
            this.router.get('/swagger', this.swaggerUi.setup(this.swaggerDocument))
        ]
	}

	routes(): any{
		return [
			this.index(),
		];
	}
}

export default new HealthcheckRouter();
