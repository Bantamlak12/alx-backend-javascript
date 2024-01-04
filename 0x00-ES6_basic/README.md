# Project: 0x00. ES6 Basics

## Resources

#### Read or watch:

- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Setup

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration files

Add the files below to your project directory

- [package.json](./package.json)
- [babel.config.js](./babel.config.js)
- [.eslintrc.js](./.eslintrc.js)

### Finally…

Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Tasks

| Task                                                           | File                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| 0. Const or let?                                               | [0-constants.js](./0-constants.js)                           |
| 1. Block Scope                                                 | [1-block-scoped.js](./1-block-scoped.js)                     |
| 2. Arrow functions                                             | [2-arrow.js](./2-arrow.js)                                   |
| 3. Parameter defaults                                          | [3-default-parameter.js](./3-default-parameter.js)           |
| 4. Rest parameter syntax for functions                         | [4-rest-parameter.js](./4-rest-parameter.js)                 |
| 5. The wonders of spread syntax                                | [5-spread-operator.js](./5-spread-operator.js)               |
| 6. Take advantage of template literals                         | [6-string-interpolation.js](./6-string-interpolation.js)     |
| 7. Object property value shorthand syntax                      | [7-getBudgetObject.js](./7-getBudgetObject.js)               |
| 8. No need to create empty objects before adding in properties | [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js)     |
| 9. ES6 method properties                                       | [9-getFullBudget.js](./9-getFullBudget.js)                   |
| 10. For...of Loops                                             | [10-loops.js](./10-loops.js)                                 |
| 11. Iterator                                                   | [11-createEmployeesObject.js](./11-createEmployeesObject.js) |
| 12. Let's create a report object                               | [12-createReportObject.js](./12-createReportObject.js)       |
| 13. Iterating through report objects                           | [100-createIteratorObject.js](./100-createIteratorObject.js) |
| 14. Iterate through object                                     | [101-iterateThroughObject.js](./101-iterateThroughObject.js) |
