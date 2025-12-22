/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/21/2025 at 09:51 PM
 *
 * Lecture171.challenge.js
 * Julia and Kate are still studying dogs, and this time they are studying if
 * dogs are eating too much or too little.  Eating too much means the dog's
 * current food portion is larger than the recommended portion, and eating too
 * little is the opposite.  Eating an okay amount means the dog's current food
 * portion is within a range 10% above and 10% below the recommended portion
 * (see hint).
 *  
 * Your tasks:
 * 1. Loop over the 'dogs' array containing dog objects, and for each dog,
 *    calculate the recommended food portion and add it to the object as a
 *    new property. Do not create a new array, simply loop over the array.
 * 
 *    Formula: recommendedFood = weight ** 0.75 * 28.
 *    (The result is in grams of food, and the weight needs to be in kg)
 * 
 * 2. Find Sarah's dog and log to the console whether it's eating too much
 *    or too little. Hint: Some dogs have multiple owners, so you first need to
 *    find Sarah in the owners array, and so this one is a bit tricky
 *    (on purpose) 🤓
 * 
 * 3. Create an array containing all owners of dogs who eat too much
 *    ('ownersEatTooMuch') and an array with all owners of dogs who eat
 *    too little ('ownersEatTooLittle').
 *
 * 4. Log a string to the console for each array created in 3., like this:
 *    "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and
 *    Michael's dogs eat too little!"
 *
 * 5. Log to the console whether there is any dog eating exactly the amount
 *    of food that is recommended (just true or false)
 *
 * 6. Log to the console whether there is any dog eating an okay amount of
 *    food (just true or false)
 *
 * 7. Create an array containing the dogs that are eating an okay amount of
 *    food (try to reuse the condition used in 6.)
 * 
 * 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
 *    portion in an ascending order
 *    (keep in mind that the portions are inside the array's objects 😉)
 *
 * Hints:
 * § Use many different tools to solve these challenges, you can use the summary
 *   lecture to choose between them 😉
 *
 * § Being within a range 10% above and below the recommended portion means:
 *   current > (recommended * 0.90) && current < (recommended * 1.10).
 *   Basically, the current portion should be between 90% and 110% of the
 *   recommended portion.
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

// Test Data:
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1:
dogs.forEach((dog) => {
    dog.recommendedFoodPortion = (((dog.weight) ** 0.75) * 28);
});

console.log(dogs);

// Task 2:
const sarahDogList = dogs.filter((dog) => dog.owners.some(owner => owner === "Sarah"));
console.log(sarahDogList);
sarahDogList.forEach((dog, index) => {
    let currentFood = dog.curFood;
    let recommendedFood = dog.recommendedFoodPortion;
    const dogName = `Sarah's dog ${index + 1}`;
    
    if (currentFood < recommendedFood)
        console.log(`${dogName} is eating too little!`);
    else if (currentFood > recommendedFood)
        console.log(`${dogName} is eating too much!`);
    else
        console.log(`${dogName} is eating just fine!`);
});

// Task 3:
// The logic is confusing here, but this seems to work:
const dogEatingTooLittle = (dog) => dog.curFood < dog.recommendedFoodPortion;
const dogEatingTooMuch = (dog) => dog.curFood > dog.recommendedFoodPortion;


const ownersEatToMuch = dogs.filter((dog) => dogEatingTooMuch(dog)).map((dog) => dog.owners).flat();
const ownersEatToLittle = dogs.filter((dog) => dogEatingTooLittle(dog)).map(dog => dog.owners).flat();

console.log(ownersEatToMuch);
console.log(ownersEatToLittle);

// Task 4:
console.log(ownersEatToMuch.join(" and ") + "'s dogs eat too much!");
console.log(ownersEatToLittle.join(" and ") + "'s dogs eat too little!");

// Task 5:
console.log(dogs.some(dog => dog.curFood === dog.recommendedFoodPortion));

// Task 6:
const dogEatsOkay = (dog) => {
    let lowerBound = 0.9 * dog.recommendedFoodPortion;
    let upperBound = 1.1 * dog.recommendedFoodPortion;
    return lowerBound <= dog.curFood && dog.curFood <= upperBound;
};

console.log(dogs.some(dog => dogEatsOkay(dog)));

// Task 7:
const dogsEatingOkay = dogs.filter((dog) => dogEatsOkay(dog));
console.log(dogsEatingOkay);

// Task 8:
// REMEMBER: Array.sort requires a function that returns three values - This isn't a C++ lambda function!
const clonedDogs = [...dogs];
clonedDogs.sort(function(dog1, dog2) {
    let dog1Recommended = dog1.recommendedFoodPortion;
    let dog2Recommended = dog2.recommendedFoodPortion;
    return dog1Recommended - dog2Recommended;
});
console.log(clonedDogs);
