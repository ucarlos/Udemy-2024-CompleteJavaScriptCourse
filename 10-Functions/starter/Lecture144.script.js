/*
 * ----------------------------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/07/2025 at 05:53 PM
 *
 * Lecture144.script.js
 * Closures
 * ----------------------------------------------------------------------------------------------------
 */

"use strict";

const secureBooking = function() {
    // Closures aren't explicitly declared - It just happens automatically,
    // but we have to recognize when this occurs.
    let passengerCount = 0;
    // As before, `passengerCount` can't be accessed from outside the function.

    // However, we can reference it inside a function like so:
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

// When this statement is executed, it saves a version of secureBooking as a closure which contains
// a version passengerCount in the heap until it isn't necessary.

// This `booker` variable exists in the global scope, while the secureBooking environment no longer
// exists at this point.  However, the closure makes a function remember all the variables that
// existed when the function was created (or instantiated)

const booker = secureBooking();
booker();
booker();
booker();

// In other words, normally after calling `secureBooking`, the function would be popped off the call
// stack.  However, because we're able to reach into the function through the `booker` variable, it
// remains in the call stack, presumably until it's not being used anymore.

// Any function always has access to the variable environment of the execution context in which the
// function was created, even after the execution context is gone.  The closure is this variable
// environment attached to the function, exactly as it was at the time and place the function was
// created.

// In the case of `booker`, this function was created, so it was born in the execution context of
// `secureBooking` which was popped off the stack previously.  Therefore, the `booker` function will
// get access to this variable environment that contains the passenger count variable.

// You could say that the `booker` scope contains a reference to the closure containing that
// particular instance of `secureBooking`.

// What we can take a look at the internal properties by doing console.dir:
console.dir(booker);
