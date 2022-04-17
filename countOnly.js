const assertEqual = require('./assertEqual');


const countOnly = function(allItems, itemsToCount) {
  const results = {}; //object that can hold stats: (count[name])
  for (const item of allItems) { //inside the loop,
    if (itemsToCount[item]) {
      if (results[item]) { //increment a counter for each item:
        results[item] += 1; //set a property with that string key to:
      } else {              //the value that was already there
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;