/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 08/04/2025 at 02:25 PM
 *
 * lecture099.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";


console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// functions

console.log(addDecl(2, 3));
// console.log(addExpression(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

// Var and const variable functions will not be hoisted until the thread of execution gets to the variable definition.
const addExpression = function(a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

if (!numProducts)
    deleteShoppingCart();


var numProducts = 10;

function deleteShoppingCart() {
    console.log(`All product deleted!`);
}
