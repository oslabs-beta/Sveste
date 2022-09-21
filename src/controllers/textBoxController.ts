import * as express from "express";

class textBoxController {
  public router = express.Router(); //delete later

  constructor() {}
  public createTests = (req: express.Request, res: express.Response) => {
    res.status(200).send("Sending a response");
    //this works by changing module in tsconfig.json to commonjs from esnext
    //also removed type: module from package.json
  };
}

//export statement
export default textBoxController;

//Prop drill down the content of the text box?

// export class TextBoxController {
//   constructor(errInfo) {

//   }
//   const createErr = new TextBoxController(errInfo);

//   //Generic error handler
//   createErr(errInfo) {
//     const { method, type, err } = errInfo;
//     return {
//       log: `textBoxController.${method} ${type}: ERROR: ${typeof err === "object" ? JSON.stringify(err) : err
//         }`,
//       message: { err: `Error occurred in swapiController.${method}.` },
//     };
//   }

// //Returns string containing template of test code
//   createTest(req, res, next) {
//     console.log('createTest was called');
//     const { text, componentName, path } = req.body; //pull text of text box + path

//     //componentName - required
//     //relativePath - required
//     //testName - router can handle
//     //expectedResult - required

//     //res.set('Content-Type', 'text/html');
//     //res.send(JSON.stringify(linkString));
//     res.locals.code = 'import \{ describe, expect, it \} from \'vitest\';';
//    // return 'import \{ describe, expect, it \} from \'vitest\';'
//     return next();
//   }

//   //need to find way to return this as one big string
//   // return {
//   //   "import \{ describe, expect, it \} from \'vitest\';";
//   //   import { render } from '@testing-library/svelte';     //should we utilize svelte testing library - allowing render function
//   //   //import componentName from `${path}`;              // require import statement for our component to be tested
//   //   describe('textBox component', function() {
//   //     beforeEach(() => {
//   //       const host = document.createElement('div');
//   //       document.body.appendChild(host);
//   //       const instance = new `${componentName}`({ target: host }); //creates instance of the component
//   //     })
//   //     it('creates an instance', function () {
//   //       expect(instance).toBeTruthy(); //toBeInDocument
//   //     });
//   //     it('renders', function () {
//   //       const {getByText} = render(`${path}`) //renders the component
//   //       expect(() => getByText(/`${text}`/i)).not.toThrow();
//   //       //expect(instance.innerHTML).toContain(text); //checks that the instance has the correct text somewhere
//   //     });
//   //   });
//   // };
// };

// //module.exports = textBoxController;
// export default textBoxController;
