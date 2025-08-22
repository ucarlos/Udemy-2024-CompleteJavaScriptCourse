'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

    // orderDelivery: function(obj) {
    //     console.log(obj);
    // },

    // We can destructure an object in a parameter definition:
    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
        console.log(`Order Received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.\n`);
    },
};

// Destructuring objects example:
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories, "\n\n");

// We can have the variables names different from the property names like so:
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags, "\n\n");

// Default values are defined like so and can be combined with the property rename from above:
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects behaves differently from destructing an array:
let a = 111;
let b = 999;
const object = {a: 23, b: 7, c: 14};

// You'll need to wrap this statement in parenthesizes in order to reassign these variables to object:
({a, b} = object);

// We can also grab subproperties of a object property like so:
// Note that 'o' and 'c' are a way to rename the variables something different from the property names.
const {
    fri: {open: o, close: c}
} = openingHours;

console.log(o, c, "\n\n");

console.log("Calling restaurant.orderDelivery() function:\n");
// Now call the orderDelivery function with an object:
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});


console.log("Calling restaurant.orderDelivery() function AGAIN:\n");
// We can omit a property here and have it handled in the function parameter definition:
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1
});
