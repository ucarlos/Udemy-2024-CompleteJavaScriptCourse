/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/13/2025 at 09:25 PM
 *
 * Lecture118.script.js
 * ES6 Enhanced Object Literal Changes
 * -----------------------------------------------------------------------------
 */

"use strict";

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // openingHours: openingHours,
    // ES6 Enhanced Object Literal Changes: 
    //     1. You don't have to specify the keyname and the value.
    //        It can just set the property without any issues.
    openingHours,

    //    2. You can also omit the key and the function keyword 
    // order(starterIndex, mainIndex) {

    // },
       
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, ...otherIngredients);
    }
    
};


// 3. Lastly, you can compute (calculate) property names:
const weekdays = ["mon", "tues", "wed", "thu", "fri", "sat"];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },

    [weekdays[4]]: {
        open: 11,
        close: 23
    },

    // You can even compute string literals:
    [`day-${2 + 4}`]: {
        open:  0,
        close: 24
    },
        
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
    }
};

