// const root = {
//   id: 'root0',
//   type: 'root',
//   parent: null,
//   value: null,
//   children: [],
// };

// const describe0 = {
//   id: 'describe0',
//   type: 'describe',
//   parent: 'root0',
//   value: 'header component',
//   children: [],
// };

// const mock0 = {
//   id: 'mock0',
//   type: 'mock',
//   parent: 'describe0',
//   value: 'beforeEach',
//   children: [],
// };

// const renderedComponent0 = {
//   id: 'renderedComponent0',
//   type: 'renderedComponent',
//   parent: 'mock0',
//   value: 'HelloWorld',
//   children: [],
// };

// const queryStatement0 = {
//   id: 'queryStatement0',
//   type: 'queryStatement',
//   parent: 'mock0',
//   value: "screen.getByRole('h2')",
//   children: [],
// };

// const test0 = {
//   id: 'test0',
//   type: 'test',
//   parent: 'describe0',
//   value: 'renders "Hello World"',
//   children: [],
// };

// const expect0 = {
//   id: 'expect0',
//   type: 'expect',
//   parent: 'test0',
//   value: ".toContain('Hello World')",
//   children: [],
// };

// const test = root;
// test.children.push(describe0);
// //DESCRIBE CHILDREN
// test.children[0].children.push(mock0, test0);
// // MOCK CHILDREN
// test.children[0].children[0].children.push(renderedComponent0, queryStatement0);
// // TEST CHILDREN
// test.children[0].children[1].children.push(expect0);

// ------------------------------------------------------------------
// import variables
const vitestImport = "import { describe, expect, it } from 'vitest';" + "\n";
const renderImport =
  "import { render } from '@testing-library/svelte';" + "\n\n";
const componentImport = (componentName, path) =>
  `import ${componentName} from ${path};` + "\n\n";
/// describe variables
const describe = (value, body) =>
  `describe(${value}), () => {
    ${body}
};` + "\n";
//mock variables
const mock = (value, body) =>
  `${value}(async () => {

    ${body}
});` + "\n";
//query variables
const query = (value) => `    let subject = await ${value};` + "\n";
//render variables
const render = (value) => `const { container } = render(${value});` + "\n";
//test variables
const testAssertion = (value, body) =>
  `it(${value}, () => {
    ${body}
});` + "\n";
//if query is a child of expect query will populate
const expect = (value, query) => `expect(${query || "subject"}${value})`;

const testVariables = {
  import: componentImport,
  describe: describe,
  mock: mock,
  render: render,
  query: query,
  test: testAssertion,
  expect: expect,
};

//-----------------------------------------------------------------------

export function processTestBlob(test) {
  let resultString = "";
  resultString += vitestImport;
  resultString += renderImport;
  resultString += processRoot(test.children);
  return resultString;
}

function processRoot(describeArr) {
  let resultString = "";
  describeArr.forEach((describeObj) => {
    resultString += describe(
      describeObj.value,
      processChildren(describeObj.children)
    );
  });
  return resultString;
}
function processChildren(childArr, body = "") {
  if (childArr.length !== 0) {
    const value = childArr[0].value;
    const type = childArr[0].type;
    const children = childArr[0].children;

    body += testVariables[type](value, processChildren(children));
    body = processChildren(childArr.slice(1), body);
  }

  return body;
}
// console.log(processTestBlob(test));
