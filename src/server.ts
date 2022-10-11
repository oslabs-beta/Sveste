import express from 'express';
import type { Express, Request, Response } from 'express';
import * as path from 'path';
import { connectToDatabase } from './services/database.services';
import cookieParser from 'cookie-parser';

export const app: Express = express();
const port = 3000;

/*
 * require routers
 */
import components from './routers/routes';
import dbRouter from './routers/dbroutes';
import favoritesRouter from './routers/favoritesRouter';

app.use(express.json());
app.use(cookieParser());
//possibly uneeded boiletplate below
app.use(express.urlencoded({ extended: true }));

//serve the front end
//app.use(express.static(path.resolve(__dirname, "./../index.html")));

//use router
connectToDatabase()
  .then(() => {
    app.use('/tests', components);
    app.use('/users', dbRouter);
    app.use('/favorites', favoritesRouter);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
  });
