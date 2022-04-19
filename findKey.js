const assertEqual = require('./assertEqual');


const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {
    let answer;
    //console.log("keys", Object.keys[key]);
    if (callback(object[key])) { //checking for key for which callback returns truthy value
      answer = key;
      return answer;
    }

  }
    
};
    
module.exports = findKey;

let cat = {
  a: 1,
  b: 3,
  c: 7
}
console.log(findKey)