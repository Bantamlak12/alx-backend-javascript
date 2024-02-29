const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a promise', function () {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal(`Promise { <pending> }`);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
