/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/29/2025 at 07:07 PM
 *
 * Lecture191.script.js
 * Internationalizing Numbers
 * -----------------------------------------------------------------------------
 */

"use strict";

const num = 3_884_764.23;
const options = {
    // style: "unit",
    // unit: "mile-per-hour"
    // style: "percent"
    style: "currency",
    currency: "USD",
    // useGrouping: false
};

let numberFormat1 = Intl.NumberFormat("en-US", options);
let numberFormat2 = Intl.NumberFormat("de-DE", options);
let numberFormat3 = Intl.NumberFormat("ar-SY", options);
let numberFormat4 = Intl.NumberFormat("es-MX", options);

console.log(`US: ${numberFormat1.format(num)}`);
console.log(`Germany: ${numberFormat2.format(num)}`);
console.log(`Syria: ${numberFormat3.format(num)}`);
console.log(`Mexico: ${numberFormat4.format(num)}`);

