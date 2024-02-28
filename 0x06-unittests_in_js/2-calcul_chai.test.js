const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('It should return sum of rounded numbers', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 2.4, 5.8)).to.equal(8);
      expect(calculateNumber('SUM', 2.4, 3.3)).to.equal(5);
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
  });

  describe('SUBTRACT', function () {
    it('It should return substraction of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 5.8, 2.4)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 3.3, 2.4)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 2, 0)).to.equal(2);
    });
  });

  describe('DIVIDE', function () {
    it('It should return division of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
