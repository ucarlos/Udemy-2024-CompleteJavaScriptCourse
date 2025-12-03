/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/01/2025 at 09:18 PM
 *
 * Lecture149.script.js
 *
 * -----------------------------------------------------------------------------
 */

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = [..."abcde"];
/////////////////////////////////////////////////
// Array.slice() returns a shallow copy of a portion of an array.
/////////////////////////////////////////////////

// Array.slice creates subarrays:
console.log(arr.slice(2));

// Array.slice excludes the end parameter:
console.log(arr.slice(2, 4));

// You can use negative parameters as the first parameter
console.log(arr.slice(-2));

// And as the second parameter as well:
console.log(arr.slice(1, -2));

// You can create a shallow copy with no arguments:
console.log(arr.slice());

// However, you can also use the spread operator to create a shallow copy:
console.log([...arr]);

/////////////////////////////////////////////////
// Array.splice() MODIFIES an array by removing or replacing entries.
/////////////////////////////////////////////////

// In this case, we remove the last index from the array:
console.log(arr.splice(-1));
console.log(arr);

// With two arguments, the first parameter defines the start index, while the second parameter
// specifies the number of elements that will be deleted:
arr.splice(1, 2);
console.log(arr);

/////////////////////////////////////////////////
// Array.reverse() reverses an array by MODIFYING the original array to match the new order:
/////////////////////////////////////////////////
arr = [..."abcde"];
const arr2 = [..."jihgf"];
console.log(arr2.reverse());



//////////////////////////////////////////////////
// Array.concat() APPENDS an second array to a first array:
//////////////////////////////////////////////////
console.log();
const letters = arr.concat(arr2);
console.log(letters);

// This is the same as doing the following though.
console.log([...arr, ...arr2]);


//////////////////////////////////////////////////
// Finally, Array.join() generates a string of all the array items separated by a separator.
//////////////////////////////////////////////////
console.log(letters.join(" - "));
