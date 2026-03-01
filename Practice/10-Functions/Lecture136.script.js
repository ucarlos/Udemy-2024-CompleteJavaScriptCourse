/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/05/2025 at 05:58 PM
 *
 * Lecture136.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

const flight = "LH234";

const jonas = {
    name: "Jonas Schmedtmann",
    passport: 23121373120
};

const checkIn = function(flightNumber, passenger) {
    // Not a good idea to change the parameters of a function:
    flightNumber = "LH999";
    passenger.name = `Mr. ${passenger.name}`;

    if (passenger.passport === 23121373120)
        window.alert("Check in");
    else
        window.alert("Wrong Passport!");
    
    
    
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// As mentioned earlier, everything is passed as a value, but there's some quirks:
// + Primitive     type parameters are passed as values (which are copies)
// + Non-Primitive type parameters are passed as reference copies.

// Once again: JavaScript does not use "pass by reference" found in languages in
//             C++, but you already know that by now.

// This is the same as doing the following:
const flightNum = flight;
const passenger = jonas;

// Please note that this behavior can cause problems in large code bases if not taken seriously.
// As an example:1

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * (1 << 20));
}

newPassport(jonas);
checkIn(flight, jonas);

