const renderImport = `    import { render, screen } from '@testing-library/svelte';\n\n`;
const vitestImport = `import { describe, expect, it } from 'vitest';\n`;
const componentImport = (componentName, path) =>
  `import ${componentName} from ${path};\n`;
/// describe variables
const describeStatement = (value, body) =>
  `    describe("${value}"), () => {
    ${body}
   };\n`;

const modifierBlock = (value) => `${value};\n`;

//render variables
const renderBlock = (value) => `const view = await render(${value});\n`;
//test variables
const testStatement = (value, body) =>
  `it("${value}", () => {
    ${body}
  });\n`;

//if query is a child of expect query will populate
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
    resultString += describeStatement(
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
