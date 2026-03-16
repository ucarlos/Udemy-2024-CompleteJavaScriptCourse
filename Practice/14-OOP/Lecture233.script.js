/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/16/2026 at 02:17 PM
 *
 * Lecture233.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";
// Here's our base class defined:
class PersonCl {    
    constructor(fullName, birthYear) {
        this._fullName = fullName;
        this._birthYear = birthYear;
    }    
    calcAge() {
        console.log(2037 - this._birthYear);
    }

    greet() {
        console.log(`Hey ${this._fullName}!`);
    }

    // Setters and getters are defined the same as in regular objects:
    // Simply prefix the `get` or `set` keyword in front of the function:

    get age() {
        return 2037 - this._birthYear;                
    }

    
    /**
     * @param {string} name
     */
    set fullName(name) {
        // NOTE: When you set a property that already exists, you'll have to make sure to prefix the
        //       variable accordingly in order to prevent any collisions:
        console.log(name);
        if (name.includes(' '))
            this._fullName = name;
        else
            console.log(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log("Hey there!");
    }    
}

// To create a subclass, use "extends" like Java, PHP, and C#:
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Call the Base Class constructor via super - This needs to be the
        // first line in the constructor:
        super(fullName, birthYear);
        this._course = course;
    }

    introduce() {
        console.log(`My name is ${this._fullName} and I study ${this._course}!`);
    }

    // Overwriting member functions from a base class is also straightforward:
    calcAge() {
        console.log(`I'm ${2037 - this._birthYear} years old, but as a student I feel more like ${2037 - this._birthYear + 10}`);
    }
}


// NOTE: If we commented out all the contents of StudentCl, this would return the base class:
const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
console.log(martha);
martha.introduce();
martha.calcAge();
