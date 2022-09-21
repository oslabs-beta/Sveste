import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

/*
 * require routers
 */
import components from "./routes/routes";

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.use("/tests", components);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//the below command runs this server:
//ts-node-esm src/server.ts
