import express, { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import "dotenv/config";

class Auth{
	constructor(req: Request, res: Response, next: any){
		this.getToken(req, res, next)
	}

	getToken(req: Request, res: Response, next: any){	
  	const authHeader = req.headers['authorization']
 	 	const token = authHeader && authHeader.split(' ')[1]
  	if (token == null) return res.sendStatus(401)

  	jwt.verify(token, process.env.SECRET as string, (err: any, user: any) => {
    	if (err) return res.sendStatus(403)
    	next()
  	})
	}
}

export default Auth;
