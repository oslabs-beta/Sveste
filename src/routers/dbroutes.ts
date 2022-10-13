import express from 'express';
import type { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.services';
import type User from '../models/models';
import { Session } from '../models/models';
// import {push} from 'svelte-spa-router';
import bcrypt from 'bcrypt';

const dbRouter = express.Router();
const SALT_WORK_FACTOR = 10;

dbRouter.use(express.json());
/*
 * Router signup request to create/insert 1 new user entry into database, checks for existing email collisions and returns appropriate loggedIn status
 */
dbRouter.post('/signup', async (req: Request, res: Response) => {
  try {
    console.log('creating new user');
    const newUser = req.body as User;
    //Hash password here
    const password = newUser.password;
    const salt = await bcrypt.genSalt(Number(SALT_WORK_FACTOR));
    const hashPassword = await bcrypt.hash(password, salt);
    newUser.password = hashPassword;
    const result = await collections.SvesteUsers.insertOne(newUser);

    if (result) return res.status(200).send({ loggedIn: true });
    else return res.status(406).send({ loggedIn: false });
  } catch (error) {
    console.error('Email already taken');
    res.status(406).send(error.message);
  }
});

/*
 * Router login request to verify user email and password entry into to homepage, returns appropriate loggedIn status
 */
dbRouter.post('/login', async (req: Request, res: Response) => {
  try {
    console.log('trying to log in');
    // const user = req.body as User;
    const { _id, password } = req.body;
    const user = { _id, password };
    const query = { _id: user._id };
    const returnedUser = (await collections.SvesteUsers.findOne(query)) as User;
    if (returnedUser === null) {
      alert('Incorrect or unfound email'); //redirect('/signup')
      res.sendStatus(406);
    }
    const passwordsMatch = await bcrypt.compare(
      user.password,
      returnedUser.password
    );
    if (!passwordsMatch) {
      return res.status(406).send('Incorrect password');
    } else {
      //set some sort of state or token on the session
      let loggedIn = { loggedIn: true };
      // const newSession = await SessionModel.create()
      const session = await collections.SvesteSessions.insertOne({
        cookieId: _id,
        createdAt: new Date(),
      });
      // res.cookie('ssid', _id ,{httpOnly: true, secure: true});
      return res
        .cookie('ssid', _id, { httpOnly: true, maxAge: 864000 })
        .status(200)
        .send(loggedIn);
    }
  } catch (error) {
    console.error('Error logging in: ', error);
    res.status(400).send(error.message);
  }
});

export default dbRouter;
