/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 08/21/2025 at 07:28 PM
 *
 * Lecture109.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

import {books} from "./PracticeBoilerplate.js";

// 1.1: Destructure the books array into two variables called firstBook and secondBook.
let [firstBook, secondBook] = books;
console.log("First Book:  ", firstBook, "\n\n");
console.log("Second Book: ", secondBook, "\n\n");

// 1.2﻿: Destructure the books array into a variable called thirdBook. You must skip the first two books.
let [, , thirdBook] = books;
console.log(thirdBook);

// 1.3﻿
// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two
// variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a
// number 4.19, and the ratingsCount variable should store a number 144584.
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
let [[, rating], [, ratingsCount]] = ratings;


// 1.4
// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and
// threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
const ratingStars = [63405, 1808];
let [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(`Five Star: ${fiveStarRatings}\nOne Star: ${oneStarRatings}\nThree Star: ${threeStarRatings}\n`);
