/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/16/2026 at 01:57 PM
 *
 * Lecture232.challenge.js
 * Your tasks:
 * 1. Use a constructor function to implement an Electric Car (called 'EV') as
 *    a child "class" of 'Car'. Besides a make and current speed, the 'EV' also
 *    has the current battery charge in % ('charge' property)
 *
 * 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and
 *    sets the battery charge to 'chargeTo'
 * 
 * 3. Implement an 'accelerate' method that will increase the car's speed by 20,
 *    and decrease the charge by 1%.
 *    Then log a message like this:
 *    'Tesla going at 140 km/h, with a charge of 22%'
 *
 * 4. Create an electric car object and experiment with calling 'accelerate',
 *    'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
 *    you 'accelerate'! Hint: Review the definition of polymorphism
 * -----------------------------------------------------------------------------
 */

"use strict";

/**
 * @param {string} make
 * @param {number} make
 */
const Car = function(make, speed) {
    this._make = make;
    this._speed = speed;
};

Car.prototype.accelerate = function() {
    this._speed += 10;
    console.log(`New ${this._make} Speed: ${this._speed} km/h`);
};

Car.prototype.brake = function() {
    this._speed -= 5;
    console.log(`New ${this._make} Speed: ${this._speed} km/h`);
};

/**
 * @param {string} make
 * @param {number} make
 * @param {number} charge
 */
const EVCl = function(make, speed, charge) {
    Car.call(this, make, speed);
    this._charge = charge;
};

EVCl.prototype = Object.create(Car.prototype);
EVCl.prototype.constructor = EVCl;

/**
 * @param {number} chargeTo
 */
EVCl.prototype.chargeBattery = function(chargeTo) {
    this.chargeBattery = chargeTo;
};

EVCl.prototype.accelerate = function() {
    this._speed += 20;
    --this._charge;
    console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`);
}


let tesla = new EVCl("Tesla", 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();

