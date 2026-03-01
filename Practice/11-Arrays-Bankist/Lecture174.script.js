/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/22/2025 at 01:51 PM
 *
 * Lecture174.script.js
 * Working With Arrays
 * -----------------------------------------------------------------------------
 */

"use strict";

import * as script from "./export_script.js";
// As before, we can create arrays in multiple ways:

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

// In order to fill an array easily, you can use Array.fill which mutates the array to contain the required values:
// Array.fill(number) fills the entirety of the array with number.
// Array.fill(number, begin) fills the array with number beginning at the specified index.
// Array.fill(number, begin, end) fills the array with number between array[begin] and array[end].
x.fill(1, 3, 5);
console.log(x);

// However, you can use Array.from() to fill an array dynamically.
const y = Array.from({length: 7}, () => 1);
console.log(y);

// Here's another example:
const z = Array.from({length: 7}, (current, index) => {
    return index + 1;
});
console.log(z);

// Here's another example of using Array.from
const randomInclusiveInt = function(min, max) {
    return min + Math.floor((max - min + 1) * Math.random());
}

const randomDice = Array.from({length: 100}, () => randomInclusiveInt(1, 6));
console.log(randomDice);

// Array.from() can convert containers (or Anything with a iterable) to Arrays.
// As an example, we could convert a NodeList returned by document.querySelectorAll() to an array.
const movementsUI = Array.from(document.querySelectorAll(".movements__value"),
    // We replace the EURO sign:
    el => Number(el.textContent.replace("€", ""))
);

console.log(movementsUI);

// However, we can use the spread operator like so:
const movementsUI2 = [...document.querySelectorAll(".movements__value")];
