/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/07/2025 at 02:54 PM
 *
 * Lecture141.script.js
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

const eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings: [],
    // book: lufthansa.book,
   
};

// Another object example:
const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: []
}

// Function.bind returns a new function in which the `this` variable is set to the specific variable.

const book = lufthansa.book;

// In this example, the book function is bound to eurowings, lufthansa, and swiss.
// Each of the following variables holds a version of the book function in which `this`
// refers to its respective object.

const bookEurowings = book.bind(eurowings);
const bookLufthansa = book.bind(lufthansa);
const bookSwiss = book.bind(swiss);

// That way, we don't have to specify the object that will serve as the `this` variable.
bookEurowings(23, "Steven Williams");

// However, we can take this even further where the passed arguments to Function.bind will always be called with the same arguments.
// NOTE: The following pattern is called Partial Application in which some of the parameters of a function are already applied and pre-defined.
const bookEurowings23 = book.bind(eurowings, 23);

// Since the first parameter was set, we only need to specify the second argument to the function.
bookEurowings23("Jonas Schmedtmann");
bookEurowings23("Martha Cooper");
console.log(eurowings);

// Another situation to use Function.bind is when objects are used with event listeners:
lufthansa.planes = 300;

lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

// Since the `this` keyword here is associated with the buyButton, you'll need to bind
// the buyPlane function to use lufthansa as the `this` object.
// let buyButton = document.querySelector(".buy");
// buyButton.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));


// Another use case for Function.bind: Partial Application in which we're not interested in the `this` keyword.
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// In this case, since we don't need the `this` variable set to anything, we can set it to null and addTax.bind
// will return us a function in which the `rate` argument is pre-defined to 0.23.
const addVAT = addTax.bind(null, 0.23);

// This would be equivalent to the following:
// const addVat = (value) => value + value * 0.23;
console.log("");
console.log(addVAT(100));
console.log(addVAT(23));

// However, do keep in mind that the order of the arguments are important.

// Here's an example of a function generator
const addTaxFunctionGenerator = function(rate) {    
    return (value) => value + value * rate;
}

console.log("");
const addVAT2 = addTaxFunctionGenerator(0.23);
console.log(addVAT2(100));
console.log(addVAT(23));



