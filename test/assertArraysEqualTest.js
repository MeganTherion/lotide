
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, "4"]), false);
  });
  it("returns true for ([7, 8, 9], [7, 8, 9]", () => {
    assert.strictEqual(assertArraysEqual([7, 8, 9], [7, 8, 9]), true);
  });
});

