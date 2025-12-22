/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/22/2025 at 01:31 PM
 *
 * Lecture173.script.js
 * Array Grouping
 * -----------------------------------------------------------------------------
 */

"use strict";

import * as script from "./export_script.js";

let movements = script.movements;
console.log(movements);

// This feature is pretty new - As of ES2024:
// Basically Object.groupBy will go through the array (Or presumedly any container)
// and group it into whatever predicate(s) are passed in the callback function.
// In this example, we'll divide the array into two groups: Deposits and Withdrawals:
const groupedMovements = Object.groupBy(movements, (movement) => {
    return (movement > 0)? "deposits" : "withdrawals";
});

console.log(groupedMovements);

// Here's another example:
const groupedByActivity = Object.groupBy(script.accounts, account => {
    const movementCount = account.movements.length;

    if (movementCount >= 8) return "very active";
    else if (movementCount >= 4) return "active";
    else if (movementCount >= 1) return "moderate";
    else return "inactive";    
});

console.log(groupedByActivity);
