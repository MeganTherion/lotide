
const { assert } = require('chai');
const tail = require('../tail');
const assertEqual = require('chai').assert.deepEqual;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3], [2, 3]));
  });
});

