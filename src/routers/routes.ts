import * as express from 'express';
import textBoxController from '../controllers/textBoxController';

const router = express.Router();
let controller = new textBoxController();
//Path for textBox component
router.post(
  '/',
  controller.createTests,
  (req: express.Request, res: express.Response, next) => {
    try {
      res.status(201).send(res.locals.code);
    } catch (err) {
      console.log('Error in routes: ', err);
      return next(err);
    }
  }
);

// router.post('/', (request, response)=>{
//   response.send({
//     method: request.method,
//     status: 200,
//     path: request.path,
//   })
// })

//module.exports = router;
export default router;
