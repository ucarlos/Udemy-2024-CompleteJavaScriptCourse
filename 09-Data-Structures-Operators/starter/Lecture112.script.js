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

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, ...otherIngredients);
    }
    
};

// Spread, because on the right hand side of the assignment operator.
const array = [1, 2, ...[3, 4]];

// However, it can be used on the left hand side with destructing -- This is now the REST operator:
// The remaining unused elements are stored in the `others` array.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Example of using three dots on both sides of the operator
// In this example, it does not include any skipped elements.
// Note that the REST element must be the last element and there can ONLY be one.
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Object REST example: The rest of the restaurant properties are stored into the weekdays Element
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// Function REST example (With REST parameters)
const add = function(...numbers) {
    console.log(...numbers);
    let value = 0;
    for (const number of numbers)
        value += number;
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// Here's an example of both the spread and Rest operators:
const x = [23, 5, 7];
add(...x);

// Here's an example of the pizza function with spread and REST syntax.
restaurant.orderPizza("Mushrooms", "Onion", "Olives", "Spinach");
restaurant.orderPizza("Mushrooms");

// TLDR: Spread operator is used where we would otherwise write values, separated by a comma.
//       Rest operator is used where we would otherwise write variable names separated by comma.
