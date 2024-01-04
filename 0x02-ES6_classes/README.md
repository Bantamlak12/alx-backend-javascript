# Project: 0x02. ES6 classes

## Resources

#### Read or watch:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

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

in your project directory:

- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`

## Configuration files

- [package.json](package.json)
- [babel.config.js](babel.config.js)
- [.eslintrc.js](./.eslintrc.js)

### and…

Don’t forget to run `$ npm install` when you have the `package.json`

## Tasks

| Task                                                          | File                                           |
| ------------------------------------------------------------- | ---------------------------------------------- |
| 0. You used to attend a place like this at some point         | [0-classroom.js](./0-classroom.js)             |
| 1. Let's make some classrooms                                 | [1-make_classrooms.js](./1-make_classrooms.js) |
| 2. A Course, Getters, and Setters                             | [2-hbtn_course.js](./2-hbtn_course.js)         |
| 3. Methods, static methods, computed methods names..... MONEY | [3-currency.js](./3-currency.js)               |
| 4. Pricing                                                    | [4-pricing.js](./4-pricing.js)                 |
| 5. A Building                                                 | [5-building.js](./5-building.js)               |
| 6. Inheritance                                                | [6-sky_high.js](./6-sky_high.js)               |
| 7. Airport                                                    | [7-airport.js](./7-airport.js)                 |
| 8. Primitive - Holberton Class                                | [8-hbtn_class.js](./8-hbtn_class.js)           |
| 9. Hoisting                                                   | [9-hoisting.js](./9-hoisting.js)               |
| 10. Vroom                                                     | [10-car.js](./10-car.js)                       |
| 11. EVCar                                                     | [100-evcar.js](./100-evcar.js)                 |
