/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/10/2025 at 01:21 PM
 *
 * Lecture159.script.js
 * The `filter` method.
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js~";

// Filter callback functions must return a boolean value, essentially making it a predicate to filter out values.
const deposits = script.movements.filter(function(mov) {
    return mov > 0;
});
console.log(deposits);

// This is the equivalent to the following:
// const depositsFor = [];
// for (const mov of script.movements)
//     if (mov > 0)
//         depositsFor.push(mov);
// console.log(depositsFor);

// Create an array of the withdrawal amounts is fairly straightforward using `filter`:
const withdrawals = script.movements.filter((amount) => amount < 0);
console.log(withdrawals);
