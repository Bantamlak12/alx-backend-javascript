# Project: 0x05. NodeJS Basics

## Resources

#### Read or watch:

- [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

## Learning Objectives

- run javascript using NodeJS
- use NodeJS modules
- use specific Node JS module to read files
- use `process` to access command line arguments and the environment
- create a small HTTP server using Node JS
- create a small HTTP server using Express JS
- create advanced routes with Express JS
- use ES6 with Node JS with Babel-node
- use Nodemon to develop faster

## Provided files

### database.csv

```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

[package.json](./package.json)
[babel.config.js](./babel.config.js)
[.eslintrc.js](./.eslintrc.js)

#### and…

Don’t forget to run `$ npm install` when you have the `package.json`

## Tasks

| Task                                                          | File                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0. Executing basic javascript with Node JS                    | [0-console.js](./0-console.js)                                                                                                                                                                                                                                                                                                                           |
| 1. Using Process stdin                                        | [1-stdin.js](./1-stdin.js)                                                                                                                                                                                                                                                                                                                               |
| 2. Reading a file synchronously with Node JS                  | [2-read_file.js](./2-read_file.js)                                                                                                                                                                                                                                                                                                                       |
| 3. Reading a file asynchronously with Node JS                 | [ 3-read_file_async.js](./3-read_file_async.js)                                                                                                                                                                                                                                                                                                          |
| 4. Create a small HTTP server using Node's HTTP module        | [4-http.js](./4-http.js)                                                                                                                                                                                                                                                                                                                                 |
| 5. Create a more complex HTTP server using Node's HTTP module | [5-http.js](./5-http.js)                                                                                                                                                                                                                                                                                                                                 |
| 6. Create a small HTTP server using Express                   | [6-http_express.js](./6-http_express.js)                                                                                                                                                                                                                                                                                                                 |
| 7. Create a more complex HTTP server using Express            | [7-http_express.js](./7-http_express.js)                                                                                                                                                                                                                                                                                                                 |
| 8. Organize a complex HTTP server using Express               | [full_server/utils.js](./full_server/utils.js), [full_server/controllers/AppController.js](./full_server/controllers/AppController.js), [full_server/controllers/StudentsController.js](./full_server/controllers/StudentsController.js), [full_server/routes/index.js](./full_server/routes/index.js), [full_server/server.js](./full_server/server.js) |
