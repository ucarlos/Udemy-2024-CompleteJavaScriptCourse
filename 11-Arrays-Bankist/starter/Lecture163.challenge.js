/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/15/2025 at 01:52 PM
 *
 * Lecture163.script.js
 * Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
 * as an arrow function, and using chaining!
 * Test data:
 * §Data 1: [5, 2, 4, 1, 15, 8, 3]
 * §Data 2: [16, 6, 10, 5, 6, 1, 4]
 * GOOD LUCK 😀
 * -----------------------------------------------------------------------------
 */

"use strict";

/**
 *
 * @param {array} ages
 */
const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map((dogAge) => {
        return (dogAge <= 2)? 2 * dogAge : 16 + 4 * dogAge;        
    });

    const adultDogs = humanAges.filter((dogAge) => dogAge >= 18);

    let totalAdultDogAge = adultDogs.reduce((acc, dogAge) => {
        return acc + dogAge;
    }, 0);

    const averageAdultDogAge = (totalAdultDogAge / adultDogs.length).toPrecision(5);
    console.log(`Average Human Age: ${averageAdultDogAge}`);
};

/**
 * Do the thing.
 * @param {array} ages
 */
const calcAverageHumanAgeChained = (ages) => ages
      .map((dog) => (dog <= 2)? 2 * dog : 16 + 4 * dog)
      .filter(age => age >= 18)
      .reduce((acc, age, index, array) => acc + (age / array.length), 0)
      .toFixed(3);

const dogList1 = [5, 2, 4, 1, 15, 8, 3];
const dogList2 = [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(dogList1);
calcAverageHumanAge(dogList2);

console.log("\n");
console.log(`Average Dog Age: ${calcAverageHumanAgeChained(dogList1)}`);
console.log(`Average Dog Age: ${calcAverageHumanAgeChained(dogList2)}`);


