const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
