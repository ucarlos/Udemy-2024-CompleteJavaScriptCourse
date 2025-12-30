/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/29/2025 at 02:31 PM
 *
 * Lecture185.script.js
 * Working with BigInt data types
 * -----------------------------------------------------------------------------
 */

"use strict";

// Since numbers are all 64-bit floating point numbers (double)
console.log(2 ** 53 - 1);

// This is the max number that can safely be displayed by the 'number' data type.
console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof ((2 ** (53 + 1))));

// However, since 2020 there's a new primitive number for larger numbers called `BigInt`:
// You can create a BigInt via the `n` literal
console.log(12345678901234567890123456789012345678901234567890123456789012345678901234567890n);
// Or through a BigInt Constructor where the number is a string.
console.log(BigInt('12345678901234567890123456789012345678901234567890123456789012345678901234567890'));

// The operations are mostly the same, but both numbers need to be BigInt data types:
console.log(10000n + 10000n);

// Trying to mix types will cause an error. You'll have to wrap the non BigInt data type into a BigInt
// console.log(23 * 10000000000000000000000000000000n);
console.log(BigInt(23) * 10000000000000000000000000000000n);

// Comparison operators work as before for the most part:
// However, note that the Math functions won't work with BigInts.
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');
const huge = 10000000000000000000000000000000000000000000000000000000000000000000000n;

console.log(huge + " is really big!");

// Divisions are also weird here. Basically, you'll get the result which is more like how integers work in other languages such as Java or C++:
console.log(11n / 3n);
console.log(10 / 3);


