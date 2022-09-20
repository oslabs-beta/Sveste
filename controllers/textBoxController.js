//Prop drill down the content of the text box?

const textBoxController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `textBoxController.${method} ${type}: ERROR: ${
      typeof err === "object" ? JSON.stringify(err) : err
    }`,
    message: { err: `Error occurred in swapiController.${method}.` },
  };
};

textBoxController.createTest = (props) => {
  const { text, componentName, path } = props; //pull text of text box + path

  //componentName - required
  //relativePath - required
  //testName - router can handle
  //expectedResult - required

  //need to find way to return this as one big string
  return {
    // import { describe, expect, it } from 'vitest';
    // import { render } from '@testing-library/svelte';     //should we utilize svelte testing library - allowing render function
    // //import componentName from `${path}`;              // require import statement for our component to be tested
    // describe('textBox component', function() {
    //   beforeEach(() => {
    //     const host = document.createElement('div');
    //     document.body.appendChild(host);
    //     const instance = new `${componentName}`({ target: host }); //creates instance of the component
    //   })
    //   it('creates an instance', function () {
    //     expect(instance).toBeTruthy(); //toBeInDocument
    //   });
    //   it('renders', function () {
    //     const {getByText} = render(`${path}`) //renders the component
    //     expect(() => getByText(/`${text}`/i)).not.toThrow();
    //     //expect(instance.innerHTML).toContain(text); //checks that the instance has the correct text somewhere
    //   });
    // });
  };
};

module.exports = textBoxController;
