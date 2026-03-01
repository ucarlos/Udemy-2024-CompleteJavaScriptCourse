/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 02/28/2026 at 09:08 PM
 *
 * Lecture226.script.js
 * ES6 Classes
 * -----------------------------------------------------------------------------
 */

"use strict";

// As you already know, JavaScript classes are simply syntactic sugar over the previous prototype
// model to make it easier for developers coming from Object Oriented languages such as Java or C++:

// Class expression which I don't like but is used.
// const PersonClass = class{};

// Class definition
// I personally go with this because it follows class definition behavior found in other OOP languages.
class PersonCl {    
    constructor(firstName, birthYear) {
        this._firstName = firstName;
        this._birthYear = birthYear;
    }

    // These member functions are defined in the PersonCl.prototype object, as we investigated with the
    // prototype in previous lectures. With this, every function exists in the prototype object
    // shared by all PersonCl instances.
    
    calcAge() {
        console.log(2037 - this._birthYear);
    }

    greet() {
        console.log(`Hey ${this._firstName}!`);
    }
        
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

// PersonCl acts like any function constructor so this ES6 style allows us to omit having to append
// functions to the PersonCl.prototype.
console.log(jessica.__proto__ === PersonCl.prototype);

// However, we can also add a function to the PersonCl.prototype if we really want to.
// This defeats the organization system created by the ES6 class syntax though.
// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this._firstName}!`);
// }

jessica.greet();

// Here's some information to keep in mind though:
// 1. Classes are NOT hoisted - even if they are defined.
//
// 2. Just like functions, classes are first-class citizens in which they can be passed into
//    functions and returned by functions.
//
// 3. The body of a class is always executed in `strict mode`. If `strict mode` isn't activated
//    previously, it will be now.

