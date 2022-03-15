const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, "4"]), false)
assertEqual(assertArraysEqual([7, 8, 9], [7, 8, 9]), true)