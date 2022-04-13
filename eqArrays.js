const assertEqual = require('./assertEqual')

const eqArrays = function(a, b) {
  //console.log("a", a, "b", b);
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      console.log("arrays here");
      if (!eqArrays(a[i], b[i])) {
        return false;
      }
    }
    else if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
// console.log(eqArrays([1, 2], [1, 2]))
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
// eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false 
module.exports = eqArrays; 
 

 

// function assertArraysEqual (arr1, arr2) {
//   if (assertEqual(eqArrays(arr1, arr2)) === true) {
//     return `👍 Assertion Passed: ${arr1} === ${arr2}`;
//   } else {
//     return `👎 No good: ${arr1} !== ${arr2}`;

//   }
// }
// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true)
// assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false)