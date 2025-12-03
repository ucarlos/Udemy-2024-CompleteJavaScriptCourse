/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/01/2025 at 09:39 PM
 *
 * Lecture150.script.js
 * The new 'at' method
 * -----------------------------------------------------------------------------
 */

"use strict";

const arr = [23, 11, 64];
// If we wanted to take a value out of an array, we would have to use array index notation:
console.log(arr[0]);
console.log(arr.at(0));

// However, since 2022 we can use Array.at() function to do the same thing but with the following
// behavior:

// + We can grab the last index of an array by doing Array.at(-1) instead of doing something like
//   arr[arr.length - 1] or the following:
// New and easier way
console.log(arr.at(-1));

// Oldest way to do this
console.log(arr[arr.length - 1]);
// This is even weirder:
console.log(arr.slice(-1)[0]);

// This also works on strings as well:
console.log("jonas".at(0));
console.log("jonas".at(-1));



