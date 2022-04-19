const assertEqual = require('./assertEqual');

const tail = function(array) {
  let n = [];
  if (array.length > 1) {
    n.push(array.slice(1));
  }
  return n; 
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
module.exports = tail;
