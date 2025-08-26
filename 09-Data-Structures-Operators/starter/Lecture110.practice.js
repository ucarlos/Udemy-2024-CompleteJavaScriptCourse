/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 08/21/2025 at 08:02 PM
 *
 * Lecture110.practice.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";
import {books} from "./PracticeBoilerplate.js";


// 2.1 Destructure the first book object from the books array into variables called title, author and ISBN.
const {title, author, ISBN} = books[0];
console.log(title, author, ISBN, "\n\n");

// 2.2 Each book object has the keywords property. Destructure the first book object from the books array into a
// variable called tags. The tags variable should be assigned with the value of the keywords property.
const {keywords: tags} = books[0];
console.log(tags, "\n\n");

// 2.3﻿ The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book
// object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable
// with a default value of 'unknown'.
let {language, programmingLanguage = "unknown"} = books[6];
console.log(language, programmingLanguage, "\n\n");

// 2.4﻿ Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author
// properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title: bookTitle, author: bookAuthor} = books[0]);
console.log(bookTitle, bookAuthor, "\n\n");

// 2.5﻿ Each book object has a deeply nested rating property as illustrated below:
// {
//   title: 'Algorithms',
//   ...
//   thirdParty: {
//     goodreads: {
//       rating: 4.41,              // <-- HERE
//       ratingsCount: 1733,
//       reviewsCount: 63,
//       fiveStarRatingCount: 976,
//       oneStarRatingCount: 13
//     }
//   }
// },
// Destructure the first book object from the books array into a variable called bookRating. In the result of your
// destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating
// property.

// Please do most of the work on the left side of the assignment operator: const ... = books[0];
let {
    thirdParty: {goodreads: {rating: bookRating}}
} = books[0];
console.log(bookRating, "\n\n");


// 2.6﻿ Write a function called printBookInfo that has three parameters called title, author and year. This function should
// work for a single object passed as an argument, and it should log to the console information about the book in this
// format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.  Example 1
function printBookInfo({title, author, year = "year unknown"}) {
    console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

console.log("\nAdditional Test:");
function printBookInfoWithCustomName({title: exampleTitle, author: exampleAuthor, year: exampleYear = "year unknown"}) {
        console.log(`${exampleTitle} by ${exampleAuthor}, ${exampleYear}`);
}

printBookInfoWithCustomName({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
printBookInfoWithCustomName({ title: 'Algorithms', author: 'Robert Sedgewick' });
