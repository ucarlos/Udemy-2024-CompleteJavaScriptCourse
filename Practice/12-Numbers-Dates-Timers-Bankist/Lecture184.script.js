/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/29/2025 at 02:23 PM
 *
 * Lecture184.script.js
 * Numeric Separators
 * -----------------------------------------------------------------------------
 */

"use strict";

// const diameter = 287460000000;
// JavaScript allows you to group numbers via the _ (underscore) separator:
const diameter = 287_460_000_000;
// The separator is ignored by JavaScript though:
console.log(diameter);

const price = 345_99
console.log(price);

// Both numbers are exactly the same:
const transferFee1 = 15_00;
const transferFee2 = 1_500;

// You can't have a separator at the beginning, before or after a decimal point, and at the end.
// You also can't have repeating separators like so: 3.14__159
const PI = 3.14_15;
console.log(PI);

// Also, you can't have a separator in strings - In this example, this will fail:
console.log(Number('230_000'));
