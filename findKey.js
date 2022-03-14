const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
    } else {
  console.log(`👍 Assertion Passed: ${actual} === ${expected}`); 
    }  
};

const findKey = function(object, callback) {
    for (key of Object.keys(object)) {
      let answer = [];
      //console.log("keys", Object.keys[key]);
       if (callback(object[key])) {
        answer.push(key);
        return answer;
      }

     }
    
   }
    
   
  
// const findKey = (o, c) => {
//   for (let k in o) if (c(o[k])) return k;
// };

   console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3))
