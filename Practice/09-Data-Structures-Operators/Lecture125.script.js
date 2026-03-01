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

// There's an alternative way to set multiple keys in a Map via its constructor.
// Map() accepts an Iterable object
const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct!"],
    [false, "Try again!"]
]);
console.log(question);

// This is the same array structure as the [key, value] returned from Object.entries():
console.log(Object.entries(restaurant.openingHours));

// Therefore, you can convert an Object to a Map by sending Object.entries() as the constructor parameter:
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Quiz app thing
console.log(question.get("question"));
// Map are iterable, so you can use foreach loops without any issues:
for (const [key, value] of question) {
    if (typeof key === "number")
        console.log(`Answer ${key}: ${value}`);
}

// I commented this out since it only works in a web browser:
// const answer = Number(prompt("Please answer"));
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));

// You can convert a Map to an array by unpacking it:
console.log(...question)

// Finally, you can convert a Map back to an Object by passing the map
// as a parameter to Object.fromEntries():
console.log(Object.fromEntries(question));







