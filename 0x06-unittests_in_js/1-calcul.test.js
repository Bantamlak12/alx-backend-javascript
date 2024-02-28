const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('It should return sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 2.4, 5.8), 8);
      assert.strictEqual(calculateNumber('SUM', 2.4, 3.3), 5);
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('It should return substraction of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 2.4), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.3, 2.4), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 0), 2);
    });
  });

  describe('DIVIDE', function () {
    it('It should return division of rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
