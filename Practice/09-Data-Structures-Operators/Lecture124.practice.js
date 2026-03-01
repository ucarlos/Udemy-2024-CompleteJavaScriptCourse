/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/29/2025 at 03:46 PM
 *
 * Lecture124.practice.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

import {books} from "./PracticeBoilerplate.js"

// 13.1﻿ Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:
// [['title', 'Clean Code'], ['author', 'Robert C. Martin']]

// let initialData = [['title', 'Clean Code'], ['author', 'Robert C. Martin']];
// let bookMap = new Map();
// for (const [index, [first, second]] of initialData.entries())
//     bookMap.set(first, second);
let bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
console.log(bookMap);


// 13.2﻿ Set a new key in bookMap called pages, and assign it with a number 464.
console.log(bookMap.set("pages", 464));

// 13.3﻿ Get the title and author values from bookMap, and log to the console a string formatted like
//      this: "${title} by ${author}".
console.log(`"${bookMap.get("title")}" by "${bookMap.get("author")}"`);

// 13.4﻿ Get the size of bookMap, and log it to the console.
console.log(`Book size: ${bookMap.size}`);

// 13.5﻿ Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
if (bookMap.has("author"))
    console.log("The author of the book is known.");


    

