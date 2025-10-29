/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/29/2025 at 04:26 PM
 *
 * Lecture125.practice.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

import {books} from "./PracticeBoilerplate.js";

// 14.1﻿ Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// 14.2﻿ Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
for (const [key, value] of firstBookMap) {
    if (typeof value === "number")
        console.log(`Key "${key}" contains a number as a value.`);
}
