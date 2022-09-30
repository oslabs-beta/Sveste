import * as express from "express";
import { processTestBlob } from "./testCompile";
class textBoxController {
  public router = express.Router(); //delete later

  constructor() {}
  public createTests = (req: express.Request, res: express.Response) => {
    let stringResponse = processTestBlob(req.body);
    return res.status(200).send(stringResponse);
  };
}

//export statement
export default textBoxController;
