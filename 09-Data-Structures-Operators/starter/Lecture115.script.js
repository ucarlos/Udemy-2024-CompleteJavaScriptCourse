/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/13/2025 at 06:59 PM
 *
 * Lecture115.script.js
 *
 * -----------------------------------------------------------------------------
 */

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


const rest1 = {
    name: 'Capri',
    numGuests: 20,
};

const rest2 = {
    name: "La Piazza",
    owner: "Giovanni Rossi",
};

// If the first value is truthy, it will immediately be returned, bypassing the second value.
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//console.log(rest1);
//console.log(rest2);


// Logical AND assignment operator -- exactly the same as this line:
// rest1.numGuests = rest1.numGuests || 10;
// Note that this will return 10 if numGuests is set to 0.
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Logical NULLISH Assignment Operator (For null or undefined)
// NOTE: This is equivalent to rest1.numGuests = rest1.numGuests ?? 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Logical AND Assignment Operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";




console.log(rest1);
console.log(rest2);
