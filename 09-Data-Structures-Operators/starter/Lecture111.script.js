'use strict';

"use strict";

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

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
    }

};


const array = [7, 8, 9];
const badNewArray = [1, 2, array[0], array[1], array[2]];
console.log(badNewArray);

const newArray = [1, 2, ...array];
console.log(newArray);

// We can use the spread operator when we want each individual element of an array:
console.log(...newArray);

// The spread operator is similar to destructuring, but it takes only all the elements of an array without creating new variables.
// Therefore, we can only use it in places where we write values separated by commas (i.e arrays).
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Two use cases of the spread operator:
//     Shallow Copy:
//         Note that shallow copy in JavaScript means that only the outer level of an array or object is a "deep" copy while any inner levels are a "shallow" copy or reference.
const mainMenuCopy = [...restaurant.mainMenu];

//     Join two or more arrays:
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);
console.log(...restaurant.mainMenu, ...restaurant.starterMenu);

// The spread operator works on any variable that is iterable, such as arrays, strings, maps, and sets—essentially any
// collection or object that implements the iterator protocol. Additionally, it can be used to copy the properties of an
// object into another object.

// Iterables: arrays, string, maps, set. Not OBJECTS!
const string = "Jonas";
const stringArray = [...string];
console.log(`String      : ${string}\nString Array: ${stringArray}`);


// const ingredients = [
//     prompt(`Let's make pasta! Ingredient 1? `),
//     prompt(`Ingredient 2? `),
//     prompt(`Ingredient 3? `)
// ];

const ingredients = ["mushrooms", "asparagus", "cheese"];

console.log(ingredients);

// The following yields the same result:
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Since ES 2018, you can apply the spread operator onto objects, despite the object not having iterables:
const newRestaurant = {foundingYear: 1998, ...restaurant, founder: "Guiseppe"};
console.log(newRestaurant);

// We can also use the spread operator to create a shallow copy of an object:
const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
