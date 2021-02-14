import express from "express";
import router from "./routes";
import './database/connection';
const i18n = require('i18n-ryla');

export default class Server{
	app: any;
	
	constructor(port: number){
		this.app = express();
		this.app.use(express.json());
		this.app.use(i18n.message)
		this.route();
		this.boot(port);
	}

	route(){
		this.app.use(new router())		
	}

	boot(port: number){
		this.app.listen(port, ()=>{console.log('🚀 Server is on port: '+port)})
	}
}

let server = new Server(3001);
