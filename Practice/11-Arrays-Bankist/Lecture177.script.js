/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/22/2025 at 04:37 PM
 *
 * Lecture177.script.js
 * Array Methods Practice
 * Here's another reduce example:
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js"

// 1. Simple Reduce Example
const bankDepositSum = script.accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2. A reduce example that generates a counter variable:
const numDeposits1000 = script.accounts
    .flatMap(acc => acc.movements)
    // .reduce((count, cur) => cur >= 1000 ? count + 1: count, 0);
    // This is equivalent to the below statement, but note that you'll have to use
    // pre-incrementation (++c) instead of post-increment (c++)
    .reduce((count, cur) => cur >= 1000? ++count : count, 0);

console.log(numDeposits1000);

// 3. Another reduce example that contains the sum of the deposits and
// withdrawals in an object.
const sums = script.accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
    // I've never done this with an array before...
    sums[(cur > 0)? "deposits" : "withdrawals"] += cur;
    // In this case, you essentially return the updated object.
    return sums;
}, {deposits: 0, withdrawals: 0});
console.log(sums);


// 4. Simple function to convert any string to a title-case
// (All words in the sentence are capitalized except for some of them)

/**
 *
 * @param {string} title
 */
const convertTitleCase = function(title) {
    const exceptions = [
        "a", "an", "the", "but", "or", "on", "in", "with"
    ];
    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

    const titleCase = title.toLowerCase()
        .split(" ")
        .map((word) => {
            if (exceptions.includes(word))
                return word;
            else
                return capitalize(word)
        })
        .join(" ");

    return titleCase;
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
