// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
// import express from 'express'
import type { ObjectId, ArrayElement } from "mongodb";
export default class User {
  constructor(
    public _id: ObjectId,
    public password: string,
    public storage: Array<[]>
  ) {}
}

export class Session {
  constructor(
    public cookieId: { type: String; required: true; unique: true },
    public createdAt: { type: Date }
  ) {}
}
