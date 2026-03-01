/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/21/2025 at 02:19 PM
 *
 * Lecture121.script.js
 *
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

// As before, the set will contain all the unique values, provided that the argument is iterable.
const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet);

// Set can be initialized without specifying an parameter in the constructor:
console.log(new Set());

// If a string is passed, this will create a set comprised of each unique character in the string.
console.log(new Set("Jonas"));

// The `size` parameter is similar to C++'s std::set without a call
console.log(`Order set size: ${ordersSet.size}`);

// Examples of checking if an element is in a set:
console.log(ordersSet.has("Pizza")); // Returns true
console.log(ordersSet.has("Bread")); // Returns false

// Elements can be added to a set via the `add` function:
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");

// Elements can also be deleted via the `delete` function:
ordersSet.delete("Risotto");
// If you want to clear a set, run its `clear` function:
// ordersSet.clear();

console.log(ordersSet);

// You cannot retrieve an element from a set.
// If you want to store items in order and retrieve it, it would be better to use an array.

// However, sets are iterable:
for (const order of ordersSet)
    console.log(order);

// Sets are usually used to remove duplicate values from an array:
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// As before, the spread operator works on all iterables, including sets:
// const uniqueStaff = new Set(staff);
const uniqueStaff = [...new Set(staff)];

console.log(uniqueStaff);

// In this situation, you can retrieve the number of unique entries:
console.log(new Set(staff).size);

// Here's the way to get the length of a string if for some reason you convert it to a set first:
console.log(new Set("Hello World!").size);

// Note that sets are not intended to replace arrays;
// If you want to store data in order that may contain duplicates, use an array instead.

// Otherwise, if you want something unique, go with a set.
