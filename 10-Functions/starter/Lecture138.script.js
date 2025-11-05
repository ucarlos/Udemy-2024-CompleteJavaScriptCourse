/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/05/2025 at 06:28 PM
 *
 * Lecture138.script.js
 * Example of Higher-Order functions. 
 * -----------------------------------------------------------------------------
 */

"use strict";

/**
 *
 * @param {string} str
 * @returns {*}
 */
const oneWord = function(str) {
    const spaceRegex = / /g;
    return str.replace(spaceRegex, "").toLowerCase();
};


/**
 *
 * @param {string} str
 * @returns {string}
 */
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(" ")
    return [first.toUpperCase(), ...others].join(" ");
}

// Here's an example of a higher-order function:
/**
 * Here's an example of a higher-order function
 * @param {string} str
 * @param {Function} functionName
 */
const transformer = function(str, functionName) {
    console.log(`   Original String: ${str}`);
    console.log(`Transformed String: ${functionName(str)}`);
    console.log(`    Transformed By: ${functionName.name}`)
}

// Basically, we're passing functions to the transformer function as a parameter
// which is called in the higher-order function.
transformer("JavaScript is the best!", upperFirstWord);
console.log("");
transformer("JavaScript is the best!", oneWord);

// Callbacks are very common in JavaScript
const high5 = function() {
    console.log("👋");
};

// document.body.addEventListener("click", high5);

['jonas', 'martha', 'adam'].forEach(high5);

let array = ['Jonas', 'Martha', 'Adam'];
array.forEach(high5);
