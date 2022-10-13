const renderImport = `    import { render, screen } from '@testing-library/svelte';\n\n`;
const vitestImport = `import { describe, expect, it } from 'vitest';\n`;
const componentImport = (componentName, path) =>
  `import ${componentName} from ${path};\n`;
/**
 *
 * @param {*} value
 * @param {*} body
 * @returns Compiled test string with body being recursively populated in process children
 */
const describeStatement = (value, body) =>
  `    describe("${value}"), () => {
    ${body}
   };\n`;

const modifierBlock = (value) => `${value};\n`;

//render variable
const renderBlock = (value) => `const view = await render(${value});\n`;
/**
 *
 * @param {*} value
 * @param {*} body
 * @returns Compiled test string with body being recursively populated in process children
 */
const testStatement = (value, body) =>
  `it("${value}", () => {
    ${body}
  });\n`;

const executionBlock = (value) => value;
const actionBlock = (value) => value;

const testVariables = {
  componentImport,
  describeStatement,
  modifierBlock,
  testStatement,
  renderBlock,
  executionBlock,
  actionBlock,
};

//-----------------------------------------------------------------------
/**
 *
 * @param {*} test
 * @returns string which is processed result of test variable functions
 * process test block takes the test object and recursively walks through it calling test variables functions
 */
export function processTestBlob(test) {
  let resultString = '';
  resultString += vitestImport;
  resultString += renderImport;
  resultString += processRoot(test.children);
  return resultString;
}
/**
 *
 * @param {*} describeArr
 * describeArr is an array of all describe statements made by the user
 * process children is called on each describe object
 */
function processRoot(describeArr) {
  let resultString = '';
  describeArr.forEach((describeObj) => {
    resultString += describeStatement(
      describeObj.value,
      processChildren(describeObj.children)
    );
  });
  return resultString;
}
/**
 *
 * @param {*} childArr
 * @param {*} body
 * process children calls itself recursively until there are no more children objects in the child array
 * concatenates returned string from test variable function to body and returns body
 */
function processChildren(childArr, body = '') {
  if (childArr.length !== 0) {
    const value = childArr[0].value;
    const type = childArr[0].type;
    const children = childArr[0].children;

    body += testVariables[type](value, processChildren(children));
    body = processChildren(childArr.slice(1), body);
  }

  return body;
}
