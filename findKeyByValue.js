const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
    } else {
  console.log(`👍 Assertion Passed: ${actual} === ${expected}`); 
    }  
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value){
  //console.log('Object.keys(object)', Object.keys(object))
for (key of Object.keys(object)) {
if (object[key]=== value) {
  return key;
} 
}
return undefined;
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

