/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/15/2026 at 07:49 PM
 *
 * Lecture230.challenge.js
 * Your tasks:
 * 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
 * 
 * 2. Add a getter called 'speedUS' which returns the current speed in mi/h
 *    (divide by 1.6)
 *
 * 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
 * converts it to km/h before storing the value, by multiplying the input by 1.6)
 *
 * 4. Create a new car and experiment with the 'accelerate' and 'brake' methods,
 *    and with the getter and setter.
 *
 * Test data:
 * + Data car 1: 'Ford' going at 120 km/h
 * -----------------------------------------------------------------------------
 */

"use strict";

class Car {
    /**
     * Main Constructor
     * @param {string} make
     * @param {number} speed
     */
    constructor(make, speed) {
        this._make = make;
        this._speed = speed;
    }
    
    accelerate() {
        this._speed += 10;
        console.log(`[ACCELERATE] New ${this._make} Speed: ${this._speed}`);
    }

    brake() {
        this._speed -= 5;
        console.log(`[BREAK] New ${this._make} Speed: ${this._speed}`);
    }

    get speedUS() {
        return this._speed / 1.6;
    }

    /**
     * @param {number} value
     */
    set speedUS(value) {
        this._speed = value * 1.6;
    }

    get speed() {
        return this._speed;
    }

    /**
     * @param {number} value
     */    
    set speed(value) {
        this._speed = value;
    }
}


let car1 = new Car("Ford", 120);
car1.speedUS = 100;
console.log(`Speed: ${car1.speedUS}mph (${car1.speed}kph)`);
