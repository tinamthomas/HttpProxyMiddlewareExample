import * as express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => res.send({message: "I am server 2"}));

export default app;

