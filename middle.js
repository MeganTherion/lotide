const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
    for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) //=> true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
// assertEqual(eqArrays([1, 2, 1,], [1, 2, 3]), true); 

function assertArraysEqual (arr1, arr2) {
  if (eqArrays(arr1, arr2) !== true) {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  } 
    console.log(`👎 No good: ${arr1} !== ${arr2}`);
  }


// assertArraysEqual([1, 2, 3], [1, 2, "3"])
// assertArraysEqual([1, 2, 3], [3, 2, 1])
const middle = function(array) {
  let middleInteger = [];
  if (array.length % 2 === 0) {
    middleInteger[0] = array[(array.length/2 - 1)];
    middleInteger[1] = array[array.length/2];
  } else {
    middleInteger[0] = array[array.length/2]
  }
  return (middleInteger);

}
assertArraysEqual(middle([1, 2, 3, 4], [2, 3]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6], [3, 4]));