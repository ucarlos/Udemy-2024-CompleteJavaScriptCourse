/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/29/2025 at 05:42 PM
 *
 * Lecture189.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

let date1 = new Date(2037, 3, 14);
let date2 = new Date(2037, 3, 4);

const days1 = calcDaysPassed(date1, date2);
console.log(days1);
