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

  describe('GET for route "/available_payments"', function () {
    it('GET / returns json', function (done) {
      request.get(
        'http://localhost:7865/available_payments',
        (err, res, body) => {
          const expectedJSON = {
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          };

          expect(res.statusCode).to.equal(200);
          expect(JSON.parse(res.body)).to.deep.equal(expectedJSON);
          done();
        }
      );
    });
  });

  describe('POST for route "/login"', function () {
    it('POST / returns "Welcom Betty"', function (done) {
      request.post('http://localhost:7865/login', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal('Welcome undefined');
        done();
      });
    });
  });
});
