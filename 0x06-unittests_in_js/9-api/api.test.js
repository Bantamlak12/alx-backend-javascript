const { expect } = require('chai');
const request = require('request');

describe('Basic Integration tests', function () {
  describe('GET for route "/"', function () {
    it('GET / returns "Welcome to the payment system"', function (done) {
      request.get('http://localhost:7865', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET for route "/cart/12"', function () {
    it('GET / returns "Payment methods for cart 12"', function (done) {
      request.get('http://localhost:7865/cart/12', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(`Payment methods for cart 12`);
        done();
      });
    });
  });

  describe('GET for route "/cart/hello"', function () {
    it('GET / returns "Payment methods for cart 12"', function (done) {
      request.get('http://localhost:7865/cart/hello', (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
