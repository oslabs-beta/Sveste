import type { Request, Response, NextFunction, RequestHandler } from "express";
import type User from "../models/models";
import { collections } from "../services/database.services";
type FavoritesController = {
  addFavorite: RequestHandler;
};

export const favoritesController: FavoritesController = {
  addFavorite: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { _id, favorite } = req.body;
      //   const currentUser = await collections.SvesteUsers.findOne({
      //     _id: _id,
      //   });
      const currentUser = await collections.SvesteUsers.updateOne(
        { _id: _id },
        {
          $push: { storage: favorite },
        }
      );
      //     console.log(currentUser);
      //   console.log(req.body);
      //   currentUser.storage.push(favorite);
      //  const update = mongooseUser.save()
      //   console.log(updatedUser);
      //   res.locals.favorites = updatedUser;
      res.locals.favorites = currentUser;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
