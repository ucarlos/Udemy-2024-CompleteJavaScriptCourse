/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/29/2025 at 03:27 PM
 *
 * Lecture124.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";
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

// Basic construction of a Map object:
const rest = new Map();

// You can append a new key via the `Map.set` function:
rest.set('name', "Classico Italiano");
rest.set(1, "Firenze, Italy");

// `Map.set` returns a Map Object containing the new key:
console.log(rest.set(2, "Lisbon, Portugal"));

// `Map.set` can also be chained without any issues since it returns an updated Map object:
rest.set('categories', ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :D")
    .set(false, "We are closed :(");

console.log(rest);

// In order to get key from a map, simply use `Map.get`:
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 21;

// Rest.get can accept a boolean expression as its key:
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// We can check if a map contains a key via `Map.prototype.has` function:
console.log(rest.has("categories"));

// We can also delete any keys via the `Map.prototype.delete` function:
rest.delete(2);
console.log(rest);

// `Map.prototype.size` is used to grab the map size:
console.log(rest.size);

// And `Map.prototype.clear()` clears the contents of a Map:
// console.log(rest.clear());

// You can use arrays or objects as map keys.
// However, each object or array passed will have its key as a reference to the array/object.
// This means that if you do the following:
rest.set([1, 2], "Test");
console.log(rest);

// Since this `[1, 2]` is a different array and not the same reference to the original rest.set call
// containing the `[1, 2]` array, this will return an undefined value like so:
console.log(rest.get([1, 2]));

// Example of a object used as a key in a map:
rest.set(document.querySelector("h1"), "Heading");
