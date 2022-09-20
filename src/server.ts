import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//the below command runs this server:
//ts-node-esm src/server.ts
