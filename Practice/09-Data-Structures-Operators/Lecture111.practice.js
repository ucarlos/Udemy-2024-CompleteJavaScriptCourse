/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 08/25/2025 at 07:35 PM
 *
 * Lecture111.practice.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

import {books} from "./PracticeBoilerplate.js";


// 3.1 Each book object has the author property, which stores an array of strings (author names) if there are multiple
// authors, or a single string (author name) if there is just one author.  Declare an array called bookAuthors, and fill it
// with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested
// arrays).

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);


// 3.2 Write a function called spellWord that accepts a single string as an argument. This function should log to the
// console each letter of the argument separated by a space.
function spellWord(string) {
    console.log(...string);
}
spellWord("3.2 Write a function called spellWord that accepts a single string as an argument.");

