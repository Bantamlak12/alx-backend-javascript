const { expect } = require('chai');
const request = require('request');

describe('Basic Integration tests', function () {
  it('GET / returns "Welcome to the payment system"', function (done) {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
