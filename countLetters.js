const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(sentence) { 
const letterCount = {};
const newSentence = sentence.replace(/\s/g, "");
  //console.log(sentence);
for (const letter of newSentence) {
  if (letterCount[letter]) {
    letterCount[letter] += 1;
  } else {
  letterCount[letter] = 1;
}
}

return letterCount;
}


const newSentence = "lighthouse in the house";
console.log(countLetters(newSentence));