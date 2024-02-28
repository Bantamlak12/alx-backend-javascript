const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  this.beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');
  });

  this.afterEach(function () {
    consoleSpy.restore();
  });

  describe('First Test', function () {
    it('should log the total as 120 and console is only called once', function () {
      sendPaymentRequestToApi(100, 20);
      const expectedResult = Utils.calculateNumber('SUM', 100, 20);
      expect(
        consoleSpy.calledOnceWithExactly(`The total is: ${expectedResult}`)
      ).to.be.true;
      consoleSpy.restore();
    });
  });

  describe('Second Test', function () {
    it('should log the total as 20 and console is only called once', function () {
      sendPaymentRequestToApi(10, 10);
      const expectedResult = Utils.calculateNumber('SUM', 10, 10);
      expect(
        consoleSpy.calledOnceWithExactly(`The total is: ${expectedResult}`)
      ).to.be.true;
    });
  });
});
