const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  const newSentence = sentence.replace(/\s/g, "");
  for (let i = 0; i < newSentence.length; i ++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push([i]);
    } else {
    results[newSentence[i]] = [i];
   
  }
  }
  
  return results;
  }
 
  module.exports = letterPositions;