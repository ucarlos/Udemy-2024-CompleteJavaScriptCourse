/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/13/2025 at 09:41 PM
 *
 * Lecture119.script.js
 * Optional Chaining (?.)
 * -----------------------------------------------------------------------------
 */

"use strict";

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, ...otherIngredients);
    }
    
};

// Traditional way of checking both properties:
// This can become very messy with nested properties:
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

// Optional Chaining is a way to avoid this -- It will return undefined once a nested property does not exist.
// In this example, if openingHours.mon exists, it will do whatever in the conditional
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);

// We can have multiple optional changing -- Here's a better way to do the traditional method above:
console.log(restaurant.openingHours?.mon?.open);
// let foo = restaurant.openingHours?.mon?.open;
// if (!foo)
//     console.log("Fuck you!");


const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
    let open = restaurant.openingHours[day]?.open ?? "closed";
    if (open != "closed")    
        console.log(`On ${day}, we open at ${open}.`);
    else
        console.log(`On ${day}, we are closed.`);
}

// Optional chaining also works for functions:
// It will check if the function exist. If not, it returns undefined.
console.log(restaurant.order?.(0, 1) ?? "Method does not exist!");

// Optional Chaining also exists for arrays:
const users = [
    {name: "Jonas", email: "hello@joneas.io"}
];

console.log(users[0]?.name ?? "User array is empty!");
