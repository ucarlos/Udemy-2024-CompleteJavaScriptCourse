/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/07/2025 at 02:23 PM
 *
 * Lecture140.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    
    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name});  
    },

};


lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings: [],
    // book: lufthansa.book,
   
};

// The following will return an error since the `book` variable turns the `lufthansa.book` function into its own function scope
// which doesn't have a `this` keyword.
const book = lufthansa.book;
// The following will fail:
// book(23, "Sarah Williams");

// However, we can explicitly set what the `this` keyword is by using `Function.call, Function.bind, and Function.apply`:
// In this situation, the first parameter explicitly sets the `this` keyword to `eurowings`, while the following arguments
// are for the book function.
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

// Here's another example:
book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);


// Another object example:
const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: []
}

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Function.apply is similar to Function.call but only allows accepts an array of arguments that will be passed to the function.
// It's not really used a lot since Function.call can accepted a spread array without problems:
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);

// The above is equivalent to this:
// book.call(swiss, ...flightData);
console.log(swiss);
