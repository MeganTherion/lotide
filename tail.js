const assertEqual = require('./assertEqual');

const tail = function(array) {
  let n = [];
  if (array.length > 1) {
    n.push(array.slice(1));
  }
  console.log(array);
  return n;
  
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log("words", tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); 
module.exports = tail;
