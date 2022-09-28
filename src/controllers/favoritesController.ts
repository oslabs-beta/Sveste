import type { Request, Response, NextFunction, RequestHandler } from "express";
import type User from "../models/models";
import { collections } from "../services/database.services";
type FavoritesController = {
  addFavorite: RequestHandler;
  getFavorites: RequestHandler;
};

export const favoritesController: FavoritesController = {
  addFavorite: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      console.log(req.body, "request body");
      const { _id, favorite } = req.body;

      const currentUser = await collections.SvesteUsers.updateOne(
        { _id: _id },
        {
          $push: { storage: favorite },
        }
      );
      //not currently returning actual user data, handled in get request/get favorites
      res.locals.favorites = currentUser;
      return next();
    } catch (err) {
      return next(err);
    }
  },
  getFavorites: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const _id = req.query._id;
      const currentUser = await collections.SvesteUsers.findOne({
        _id: _id,
      });
      res.locals.favorites = currentUser.storage;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};