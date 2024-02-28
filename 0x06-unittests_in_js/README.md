# Project: 0x06. Unittests in JS

## Resources

#### Read or watch:

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/api/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/en/guide/routing.html)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## Learning Objectives

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Tasks

| Task                                                | File                                                                                                                       |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 0. Basic test with Mocha and Node assertion library | [package.json](./package.json), [0-calcul.js](./0-calcul.js), [0-calcul.test.js](./0-calcul.test.js)                       |
| 1. Combining descriptions                           | [1-calcul.js](./1-calcul.js), [1-calcul.test.js](./1-calcul.test.js)                                                       |
| 2. Basic test using Chai assertion library          | [2-calcul_chai.js](./2-calcul_chai.js), [2-calcul_chai.test.js](./2-calcul_chai.test.js)                                   |
| 3. Spies                                            | [utils.js](./utils.js), [3-payment.js](./3-payment.js), [3-payment.test.js](./3-payment.test.js)                           |
| 4. Stubs                                            | [4-payment.js](./4-payment.js), [4-payment.test.js](./4-payment.test.js)                                                   |
| 5. Hooks                                            | [5-payment.js](./5-payment.js), [5-payment.test.js](./5-payment.test.js)                                                   |
| 6. Async tests with done                            | [6-payment_token.js](./6-payment_token.js), [6-payment_token.test.js](./6-payment_token.test.js)                           |
| 7. Skip                                             | [7-skip.test.js](./7-skip.test.js)                                                                                         |
| 8. Basic Integration testing                        | [8-api/package.json](./8-api/package.json), [8-api/api.js](./8-api/api.js), [8-api/api.test.js](./8-api/api.test.js)       |
| 9. Regex integration testing                        | [9-api/api.js](./9-api/api.js), [9-api/api.test.js](./9-api/api.test.js), [9-api/package.json](./9-api/package.json)       |
| 10. Deep equality & Post integration testing        | [10-api/api.js](./10-api/api.js), [10-api/api.test.js](./10-api/api.test.js), [10-api/package.json](./10-api/package.json) |
