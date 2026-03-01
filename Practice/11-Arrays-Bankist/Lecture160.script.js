/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/10/2025 at 01:29 PM
 *
 * Lecture160.script.js
 * The `reduce` method
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js~";

console.log(script.movements);

// The reduce method is essentially a way to accumulate a specifc value in an array
// The last three parameters are the same as the ForEach, Map, and Filter, but
// we now have a `acc` parameter which accumulates in the result that will be returned.

const balance = script.movements.reduce(function(acc, element, index, array) {
    console.log(`Iterator: ${index}: ${acc}`);
    return acc + element;

}, 0); // This zero is our initial value for the accumulator.

console.log(balance);

// Another example of Array.reduce:
const calcPrintBalance = function(movements) {
    const balance = movements.reduce((acc, movement) => acc + movement, 0);
    if (script.labelBalance)
        script.labelBalance.textContent = `${balance} EUR`;
}

calcPrintBalance(script.account1.movements);

// Example: Get the maximum value of the movements array using Array.reduce:
const maximum = script.movements.reduce((acc, element) => {
    return (element > acc) ? element : acc;
}, script.movements[0]);

console.log(maximum);    


