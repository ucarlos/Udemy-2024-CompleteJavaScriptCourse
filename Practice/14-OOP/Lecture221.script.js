/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 02/23/2026 at 10:06 PM
 *
 * Lecture221.script.js
 * Constructor Functions and the new Operator
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

    // We can define methods in this prototype function without any issues, but this is bad practice
    // since each object will have its own version of it.
    
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

const jay = "Jay";
console.log(jonas instanceof Person);
console.log(jay instanceof Person);
