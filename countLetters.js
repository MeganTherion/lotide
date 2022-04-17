

const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const letterCount = {};
  const newSentence = sentence.replace(/\s/g, "");
  for (const letter of newSentence) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
};
module.exports = countLetters;

