/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/21/2025 at 09:36 PM
 *
 * Lecture170.script.js
 * Array.flat and Array.flatMap functions
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js";


// Given this array declaration
const array = [
    [1, 2, 3],
    [4, 5, 6],
    7, 8
];

// You can flatten this 2-D array into a single array that contains all the numbers via the
// Array.flat() function introduced in ES2019. Note that there's no callback defined here.
console.log(array.flat());

// However, what if we have a deeper nested array like so?
const deepArray = [
    [[1, 2], 3],
    [4, [5, 6]],
    7, 8
];

// This resulted in a array that is flatten by a level of 1.
console.log(deepArray.flat());

// If we want to specify the "flatness" depth, we can pass a parameter like so:
console.log(deepArray.flat(2));

// Here's another example that returns a nested array via Array.flat()
// const accountMovements = script.accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// Here's another way to do this:
const overallBalance = script.accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

// Since the above requires us to map and then call flat(), we can use Array.flatMap that does both
// in a single function:
//
// NOTE: This will only flatten only one level - If you need to flatten more
//       levels, call Array.map and Array.flat() as per the previous example.
const overallBalance2 = script.accounts.flatMap((acc) => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
