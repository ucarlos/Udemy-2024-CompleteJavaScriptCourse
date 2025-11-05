/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/04/2025 at 02:24 PM
 *
 * Lecture129.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

const email = "hello@jonas.io";
const loginEmail = "        Hello@Jonas.Io \n";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing Example
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Boolean function examples:
const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));


if (plane.startsWith("Airbus") && plane.endsWith("neo"))
    console.log("Part of the New Airbus family!");

// Practice Exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes("knife") || baggage.includes("gun"))
        console.log("You are NOT allowed on board.");
    else
        console.log("Welcome Aboard!");    
};

checkBaggage("I have a laptop, some Food, and a pocket Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection");

