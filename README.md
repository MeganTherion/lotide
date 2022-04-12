# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @megantherion/lotide`

**Require it:**

`const _ = require('@megantherion/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*head,
  tail,
  middle,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without

* `head()`: retrieves the head of an array
* `tail()`: retrieves the tail of an array
* `middle()`: retrieves the middle-most element/s of an array
* `assertArraysEqual()`: asserts if two arrays are equal
* `assertEqual()`: asserts if two primitive values are equal
* `assertObjectsEqual()`: asserts if two objects are equal
* `countLetters()`: counts the occurrence of each letter in a string of letters
* `countOnly()`: counts the occurrence of a character in a string
* `eqArrays()`: compares two arrays for equality
* `eqObjects()`: compares two objects for equality
* `findKey()`: retrieves a specified key from an object
* `findKeyByValue()`: finds a key based on a value
* `letterPositions()`: finds the position of a letter in a string
* `map()`: iterates over an array and performs a callback function
* `takeUntil()`: retrieves items from an array until a specified item
* `without()`: creates a new array of items without specified items from original array
