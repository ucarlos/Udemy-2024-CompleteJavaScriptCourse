/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 02/28/2026 at 08:50 PM
 *
 * Lecture225.challenge.js
 *
 * Your tasks:
 * 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
 *    'speed' property. The 'speed' property is the current speed of the car in
 *    km/h
 *
 * 2. Implement an 'accelerate' method that will increase the car's speed by 10,
 *    and log the new speed to the console.
 *
 * 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
 *    the new speed to the console.
 *
 * 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
 *    'brake' multiple times on each of them
 * -----------------------------------------------------------------------------
 */

"use strict";

/**
 * Create a instance of a car object.
 * @param {string} make
 * @param {number} speed
 */
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

// If you're planning on adding functions to this class, add it to the prototype since only adding
// it to the object will add it to the *Car* object, not its instances.
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`New ${this.make} Speed: ${this.speed}`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`New ${this.make} Speed: ${this.speed}`);
}

let car1 = new Car("BMW", 120);

let car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();

car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
car2.brake();


