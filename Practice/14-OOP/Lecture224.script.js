/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 02/28/2026 at 08:28 PM
 *
 * Lecture224.script.js
 *
 * -----------------------------------------------------------------------------
 */
"use strict";

// You probably don't remember this since you mostly use ES6 classes, but this is one way to
// instantiate an class object by first creating the prototype function and then creating an
// instance with the `new` keyword and the function parameters.

// By the way, you can't use arrow syntax here since there has to be a specific `this` associated
// with this prototype function.

// Also note that these function constructors are not a feature of the language, but rather a
// pattern that has been developed over time that is used by everyone.
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

};

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

// How do prototypes work? Every function in JavaScript automatically has a prototype property,
// which includes constructor functions.  Each instance of said class (objects in JavaScript speak)
// then get access to all the properties and functions defined for their associated prototype
// property.
Person.prototype.calcAge = function() {
    // This is the preferred way to define member functions for a class which can be used by all
    // objects.
    console.log(2037 - this.birthYear);
}

console.log(Person.prototype);
jonas.calcAge();
matilda.calcAge();

// By the way, all class instances share the same prototype property amongst each other, which is
// the prototype property of the original constructor function.
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));

// "However, the Person function itself is not an instance created by the Person constructor, so its
// prototype chain does not include Person.prototype."
console.log(Person.prototype.isPrototypeOf(Person));


// Remember what I told you about prototype properties? You can actually add them like so:
Person.prototype.species = "Homo Sapiens";
// However, these are inherited properties, not owned directly by the object.
console.log(jonas.species, matilda.species);

// We can check if an object owns a property via the Object.hasOwnProperty function:
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

// Let's go through the prototype chain for the jonas object:
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// Now try the array.prototype:
const arr = [3, 6, 4, 9, 9, 4, 2, 20, 21, 20, 1, 5];
console.log(arr.__proto__);

// The prototype used in this `arr` variable is the same for all Array variables:
console.log(arr.__proto__ === Array.prototype);

// As usual, the prototype here is the Object.prototype:
console.log(arr.__proto__.__proto__);

// You can add functions to the Array.prototype which will be inherited by all array instances:
Array.prototype.unique = function() {
    return [...new Set(this)];
}

// However, this isn't a good practice since `extending` the prototype can cause problems later
// along the line which may break your code, cause bugs, or make it difficult to work with multiple
// developers in a large project.
console.log(arr.unique());

console.dir(x => x + 1);


