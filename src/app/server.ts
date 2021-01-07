import express from "express";
import router from "./routes";

export default class Server{
	app: any;
	
	constructor(port: number){
		this.app = express();
		this.route();
		this.boot(port);
	}

	route(){
		this.app.use(new router())		
	}

	boot(port: number){
		this.app.listen(port, ()=>{console.log('Server is on port: '+port)})
	}
}

let server = new Server(3000);
