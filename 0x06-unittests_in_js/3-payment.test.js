const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmount = 45.4;
    const totalShipping = 24.7;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(
      calculateNumberSpy.calledOnceWithExactly(
        'SUM',
        totalAmount,
        totalShipping
      )
    ).to.be.true;
    calculateNumberSpy.restore();
  });

  it('should log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const totalAmount = 45.4;
    const totalShipping = 24.7;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    const expectedTotal = Utils.calculateNumber(
      'SUM',
      totalAmount,
      totalShipping
    );
    expect(consoleSpy.calledOnceWithExactly(`The total is: ${expectedTotal}`))
      .to.be.true;
    consoleSpy.restore();
  });
});
