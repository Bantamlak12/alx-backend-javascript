const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    const calculateNumberStub = sinon
      .stub(Utils, 'calculateNumber')
      .returns(10);
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(
      calculateNumberStub.calledOnceWithExactly(
        'SUM',
        totalAmount,
        totalShipping
      )
    ).to.be.true;
    calculateNumberStub.restore();
  });

  it('should log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 20;

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
