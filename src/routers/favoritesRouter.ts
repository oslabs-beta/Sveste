import express from "express";
import type { Request, Response } from "express";
const favoritesRouter = express.Router();
favoritesRouter.use(express.json());

favoritesRouter.get("/", (req: Request, res: Response) => {
  return res.status(200).send("get request working");
});
favoritesRouter.post("/", (req: Request, res: Response) => {
  return res.status(200).send("post request working");
});
export default favoritesRouter;
