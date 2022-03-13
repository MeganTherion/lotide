function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function(object1, object2){
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  //console.log(keys1, keys2);
if (keys1.length !== keys2.length) {
  //console.log(keys1, keys2);
  return false;
} 
for (const key of keys1) { //for (const key of object1)
  if (keys1[key] === keys2[key]) {
  if  (Array.isArray([keys1[key]]) && Array.isArray([keys2[key]])) {
    //console.log("test");
    if (eqArrays([keys1[key]], [keys2[key]])) {
  return true;
  }   
} if (object1[keys1[key]] !== object2[keys2[key]]) {
  return false;
}

return true;
}
}
return false;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } 
    console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); 
  }

  

  let input = { 
    a: '1', 
    b: '2'
   } 
  let input2 = {
    a: '1',
    b: '2'
  }
  let input3 = {
    a: '4',
    b: '7'
  }
  
  console.log(assertObjectsEqual(input3, input2));