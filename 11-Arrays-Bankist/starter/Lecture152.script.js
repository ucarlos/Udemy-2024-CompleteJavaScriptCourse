/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/01/2025 at 10:09 PM
 *
 * Lecture152.script.js
 * Using foreach with Maps and Sets:
 * -----------------------------------------------------------------------------
 */

"use strict";

// forEach is available for both maps and sets:

// Remember that for each array entry in the 2d array, the first index is the map
// key while the second index is the value associated with the key.

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// However, the three variables that can be passed to the forEach function call
// are a little different for Maps:
// Parameter 1: The current value associated with a key
// Parameter 2: Key instead of index
// Parameter 3: The Entire Map instead of an entire array

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

// Now for sets:
const currenciesUnique = new Set(["USD", "GBP", "USD", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

// The callback function signature is also a little different for Sets as well:
// Parameter 1: The current set element
// Parameter 2: The current set element (again) since a set does not have keys.
// Parameter 3: 
currenciesUnique.forEach(function(value, _, map) {
    // In this example, the value will be the same as the key
    console.log(`${value}: ${value}`);
});
