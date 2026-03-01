/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/13/2025 at 10:04 PM
 *
 * Lecture119.practice.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

import {books} from "./PracticeBoilerplate.js";

// 10.1﻿ Write a function called getFirstKeyword that takes the book object as an argument. This function should return
// the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It
// shouldn't throw an error. Use optional chaining for that.

function getFirstKeyword(bookObject) {
    return bookObject.keywords?.[0];   
}

console.log(getFirstKeyword(books[0]));

const newBook2 = {
    title: 'The C Programming Language',
    author: ['Brian W. Kernighan', 'Dennis M. Ritchie']
}
console.log(getFirstKeyword(newBook2));

