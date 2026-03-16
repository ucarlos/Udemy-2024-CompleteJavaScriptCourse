/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/16/2026 at 04:37 PM
 *
 * Lecture239.challenge.js
 * Your tasks:
 * 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
 *    child class of the 'CarCl' class
 * 2. Make the 'charge' property private.
 * 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
 *    methods of this class, and also update the 'brake' method in the 'CarCl'
 *    class. Then experiment with chaining!
 *
 * TEST DATA
 * -----------------------------------------------------------------------------
 */

"use strict";

class CarCl {
   /**
    * @param {string} make
    * @param {number} make
    */
    constructor(make, speed) {
        this._make = make;
        this._speed = speed;
    }

    accelerate() {
        this._speed += 10;
        console.log(`New ${this._make} Speed: ${this._speed} km/h`);
    }

    brake() {
        this._speed -= 5;
        console.log(`New ${this._make} Speed: ${this._speed} km/h`);
    }
}

class EVCl extends CarCl {
    #_charge = undefined;
    
    constructor(make, speed, charge) {
        super(make, speed);
        this.#_charge = charge;
    }

    /**
     * @param {number} chargeTo
     */
    chargeBattery(chargeTo) {
        this.#_charge = chargeTo;
        console.log(`${this._make} has now been charged to ${this.#_charge}%`);
        return this;
    }

    accelerate() {
        this._speed += 20;
        ++this.#_charge;
        console.log(`${this._make} going at ${this._speed} km/h, with a charge of ${this.#_charge}%`);
        return this;
    }

    brake() {
        super.brake();
        return this;
    }
}

let tesla = new EVCl("Tesla", 120, 23);
tesla.accelerate().brake().brake().brake().chargeBattery(69.420);
