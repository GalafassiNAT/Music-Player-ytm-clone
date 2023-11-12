import "express-async-errors";
import {Request, Response } from "express";
import express from "express";
import { AppError } from "./src/app/errors/AppError";


const app = express();

app.use(express.json());


// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
	if(err instanceof AppError){
		console.log(err);
		return res.status(err.statusCode).json({
			status: "error",
			message: err.message
		});
	}else{
		console.log(err);
		return res.status(500).json({
			status: "error",
			message: "Internal Server Error"
		});
	}

});



app.listen(3000, () => {
	console.log("Listening on port 3000🚀🚀🚀");
});
