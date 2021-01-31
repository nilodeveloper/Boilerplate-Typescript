import express, { Request, Response } from "express";

class HealthcheckRouter{
	
	router: any;			

	constructor(){
		this.router = express();
		return this.routes();
	}

	index(){
		return [
            this.router.get('/healthcheck', (req: Request, res: Response)=>{
                res.send('Get is ok!')
            }),

            this.router.post('/healthcheck', (req: Request, res: Response)=>{
                res.send('Post is ok!')
            }), 

            this.router.put('/healthcheck', (req: Request, res: Response)=>{
                res.send('Put is ok!')
            }), 

            this.router.delete('/healthcheck', (req: Request, res: Response)=>{
                res.status(400).send('Delete is ok')
            })
        ]
	}

	routes(): any{
		return [
			this.index(),
		];
	}
}

export default new HealthcheckRouter();
