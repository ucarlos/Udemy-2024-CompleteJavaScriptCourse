/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 02/28/2026 at 09:22 PM
 *
 * Lecture227.script.js
 * Setters and Getters
 * -----------------------------------------------------------------------------
 */

"use strict";

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
     * Here's our example of a setter function:  
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
    
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge(jessica.age);


// PersonCl acts like any function constructor so this ES6 style allows us to omit having to append
// functions to the PersonCl.prototype.
console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

// Here's some information to keep in mind though:
// 1. Classes are NOT hoisted - even if they are defined.
//
// 2. Just like functions, classes are first-class citizens in which they can be passed into
//    functions and returned by functions.
//
// 3. The body of a class is always executed in `strict mode`. If `strict mode` isn't activated
//    previously, it will be now.

const account = {
    owner: "Jonas",
    movements: [200, 530, 120, 300],

    // You can define setters and getters via the `get` and `set` keywords.
    // This allows you to access the property directly, similar to C#:
    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(value) {
        return this.movements.push(value);
    }
};

// As mentioned before, this will call the getter function:
console.log(account.latest);
// While this will call the setter function:
account.latest = 50;
// You can verify this 
console.log(account);

jessica.fullName = "Jessica Davis";
const walter = new PersonCl("Walter White", 1965);
console.log(walter.fullName);
