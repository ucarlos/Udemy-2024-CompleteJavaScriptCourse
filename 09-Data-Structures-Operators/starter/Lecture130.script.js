/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/04/2025 at 03:13 PM
 *
 * Lecture130.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

// Example of String.prototype.join
console.log("A+Very+Nice+String".split("+"));
console.log("Jonas Schemedtmann".split(" "));

// This is also valid:
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
console.log(firstName, lastName);

// Example of String.prototype.join() to
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function(name) {
    let capitalizedNameList = [];
    let splitName = name.split(" ");

    for (let string of splitName) {
        let first = string[0];
        capitalizedNameList.push(string.replace(first, first.toUpperCase()));
    }

    return capitalizedNameList.join(" ");
}

console.log(capitalizeName("jessica ann smith davis"));
console.log(capitalizeName("jonas Schmedtmann"));

// Example of String padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function(number) {
    const str = String(number);
    const last = str.slice(-4);
    const result = last.padStart((str.length), "*");
    return result;

}

console.log(maskCreditCard(12345678823234728));
console.log(maskCreditCard("31832349839213"));

// Example of String.repeat():
const message2 = "Bad weather... All Departures delayed...";
console.log(message2.repeat(5));


const planesInLine = function(planes) {
    console.log(`There are ${planes} planes in line ${"✈️".repeat(planes)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);
