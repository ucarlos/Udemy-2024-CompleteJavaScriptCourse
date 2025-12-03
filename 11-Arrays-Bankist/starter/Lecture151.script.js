/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/01/2025 at 09:49 PM
 *
 * Lecture151.script.js
 * Looping arrays with Foreach
 * -----------------------------------------------------------------------------
 */

"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// This is the familiar way to loop over each entry in the array:
console.log("For of loop example:");
for (const movement of movements) {
    let amount = Math.abs(movement);
    if (movement > 0)
        console.log(`You Deposited ${amount}`);
    else
        console.log(`You withdrew ${amount}`);
}

console.log("\nArray.forEach() Example:");
// However, we have an alternative way via the Array.forEach() method.
// The Array.forEach function will call this passed callback function as it loops over the array.
// In other words, this callback function is used called by each index like so:
// Index 0: calls function(200)
// Index 1: calls function(450)
// Index 2: calls function(400)

movements.forEach(function(movement) {
    let amount = Math.abs(movement);
    if (movement > 0)
        console.log(`You Deposited ${amount}`);
    else
        console.log(`You withdrew ${amount}`);
});


// If we need to access a counter index, we would have to use the following for the for-of loop:
// for (const [index, movement] of movements.entries())

// However, we can access a counter index like so in Array.forEach() which is much easier:
// The names don't matter but the order has to be as follows:
// Parameter 1: Current Element
// Parameter 2: Current Index
// Parameter 3: The Entire Array that is being looped over

console.log("\nExample of Array.forEach with element, index, and array:");
movements.forEach(function(elem, index, array) {
    if (elem > 0)
        console.log(`Movement ${index + 1}: You deposited ${elem}`);
    else
        console.log(`Movement ${index + 1}: You withdrew ${Math.abs(elem)}`);

    console.log(array);
});

// NOTE: You can't break out of a Array.forEach() element. The function will always loop through the
//       entire array.
