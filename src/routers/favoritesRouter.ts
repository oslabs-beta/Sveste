import express from "express";
import type { Request, Response } from "express";
import { favoritesController } from "../controllers/favoritesController";
const favoritesRouter = express.Router();
favoritesRouter.use(express.json());

favoritesRouter.get(
  "/",
  favoritesController.addFavorite,
  (req: Request, res: Response) => {
    return res.status(200).send(res.locals.favorites);
  }
);
favoritesRouter.post("/", (req: Request, res: Response) => {
  return res.status(200).send("post request working");
});
export default favoritesRouter;
