/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/10/2025 at 12:27 PM
 *
 * Lecture157.script.js
 * The Map Method
 * -----------------------------------------------------------------------------
 */

"use strict";

import * as script from "./export_script.js";

const eurToUSD = 1.1;
// const movementsUSD = movements.map(function(element) {
//     return Math.round(element * eurToUSD, 4);
// });

const movementsUSD = script.movements.map(mov => Math.round(mov * eurToUSD, 4));

console.log(script.movements);
console.log(movementsUSD);

const movementsUSDFor = [];
for (const mov of script.movements)
    movementsUSDFor.push(Math.round(mov * eurToUSD));

console.log(movementsUSDFor);

const movementsDescriptions = script.movements.map((mov, index, array) => {
    if (mov > 0)
        return `Movement ${index + 1}: You deposited ${mov}`;
    else
        return `Movement ${index + 1}: You withdrew ${Math.abs(mov)}`;

});

console.log(movementsDescriptions);
