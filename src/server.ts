import express from "express";
import type { Express, Request, Response } from "express";
import * as path from "path";

const app: Express = express();
const port = 3000;

/*
 * require routers
 */
import components from "./routes/routes";

app.use(express.json());

//possibly uneeded boiletplate below
app.use(express.urlencoded({ extended: true }));

//serve the front end
app.use(express.static(path.resolve(__dirname, "./../index.html")));

app.get("/", (req: Request, res: Response) => {
  //res.sendStatus(200);
  res.status(200).sendFile(path.join(__dirname, "/../index.html"));
});

// app.get('/login', (req: Request, res:Response) => {
//   res.sendStatus(200);
// })

app.use("/tests", components);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//the below command runs this server:
//ts-node-esm src/server.ts
