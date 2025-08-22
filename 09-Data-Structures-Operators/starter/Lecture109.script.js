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

};

const array = [2, 3, 4];
const a = array[0];
const b = array[1];
const c = array[2];

const [x, y, z] = array;
console.log(x, y, z);
console.log(array);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


// Normal method of switching variables with a temporary variable.
// const temp = main;
// main = secondary;
// secondary = temp;

// Alternative method of reassigning variables without a temporary variable.
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive two return values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);


// Nested array example -- Destructuring inside Destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// If we have an array shorter than we think, we'll get an undefined value for the last variable:
// const [p, q, r] = [8, 9];
// However, we can set default values to prevent it:
const [p = 1, q = 1, r = 1]  = [8, 9];
console.log(p, q, r);
