/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/15/2025 at 01:42 PM
 *
 * Lecture162.script.js
 * The magic of chaining methods.
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js";

// Example of chained array methods:
const totalDepositsUSD = script.movements
      .filter(mov => mov > 0)
      // .map(mov => mov * script.eurToUSD)
      .map((mov, index, array) => {
          // Note that this will be console.log statement will be called for all indexes 
          // console.log(array);
          return mov * script.eurToUSD
      })
      .reduce((acc, mov) => acc + mov, 0)
      .toFixed(2);
console.log(totalDepositsUSD);

const calcDisplaySummary = function(movements) {
    const incomes = script.movements
          .filter((mov) => mov > 0)
          .reduce((acc, index) => acc + index, 0);

    if (script.labelSumIn)
        script.labelSumIn.textContent = `${incomes}€`;

    const out = movements
        .filter(mov => mov < 0)
        .reduce((acc, index) => acc + index, 0);

    if (script.labelSumOut)
        script.labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = script.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * 1.2 / 100)
        .filter(((interest, index, array)  => {
            console.log(array);
            return interest >= 1
        }))
        .reduce((acc, interest) => acc + interest, 0);

    if (script.labelSumInterest)
        script.labelSumInterest.textContent = `${interest}€`;

}

calcDisplaySummary(script.account1.movements);

// NOTE: Do not try to abuse chaining since it can cause large performance issues if using large arrays.
//       If this is the case, try to limit this to a few calls.
//       It's also bad practice to chain functions that modify the original array since it opens up problems
//       in a large application.


