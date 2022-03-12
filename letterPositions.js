// // const assertEqual = function(actual, expected) {
// //   if (actual !== expected) {
// //     console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
// //     } else {
// //   console.log(`👍 Assertion Passed: ${actual} === ${expected}`); 
// //     }  
// // };

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

function assertArraysEqual (arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    return false;
  } 
    return true;
  }

const letterPositions = function(sentence) {
  const results = {
    //letter : 0,
    //index : []
  };
  const newSentence = sentence.replace(/\s/g, "");
  for (let i = 0; i < newSentence.length; i ++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push([i]);
    } else {
    results[newSentence[i]] = [i];
    //results.index=[i];
  }
  }
  
  return results;
  }
 console.log(letterPositions("hello"));
//assertArraysEqual(letterPositions("hello").e, [1]);
//(letterPositions("hello"))
