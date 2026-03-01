/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/22/2025 at 02:21 PM
 *
 * Lecture175.script.js
 * Non-Destructive Alternatives: toReversed(), toSorted(), toSpliced(), with()
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js";

let movements = [...script.movements];
// As mentioned before, Array.reverse() mutates the array:
console.log(movements);
let reversedMov = movements.reverse();
console.log(reversedMov);

// If we want to preserve the original state, we could either do Array.slice.reverse()
// , but there's a better way via Array.toReversed():
reversedMov = script.movements.toReversed();
console.log(reversedMov);

// As per the above, there's also toSorted() to sort an array without mutating it as well
// toSpliced() to splice an array without mutating it.
movements = [...script.movements];
// As an alternative to the below statement, 
// movements[1] = 2000;
// We can just use Array.with() to return a new array that contains the modified value at that index.
const newMovements = movements.with(1, 2000);
