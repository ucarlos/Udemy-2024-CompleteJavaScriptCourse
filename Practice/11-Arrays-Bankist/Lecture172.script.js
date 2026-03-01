/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/22/2025 at 12:28 PM
 *
 * Lecture172.script.js
 * Sorting Arrays
 * -----------------------------------------------------------------------------
 */

"use strict";

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
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const createUsernames = function(accounts) {
    accounts.forEach(function(account) {
        account.username = account.owner.toLowerCase().split(" ").map((word) => word[0]).join("");
    });
}

createUsernames(accounts);



const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
};
const displayMovements = function (movements, sort = false) {
    // Clear any HTML tags in the Movements container:
    containerMovements.innerHTML = '';

    // Sort the movements array in ascending order if we specify sorting:
    const modifiedMovements = (sort)? movements.slice().sort(a, b => a - b) : movements;


    modifiedMovements.forEach(function (elem, index) {
        const type = (elem > 0)? "deposit" : "withdrawal";

        const html = `
          <div class="movements__row">
              <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
              <div class="movements__value">${elem}€</div>
          </div>`;

        // We can actually insert html templates to an element via the Element.insertAdjacentHTML function:
        containerMovements?.insertAdjacentHTML("afterbegin", html);
    });
}

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0)
        .toFixed(2);
    labelSumIn.textContent = `${incomes}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0)
        .toFixed(2);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0)
        .toFixed(2);
    labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc) {
    // Display Movements:
    displayMovements(acc.movements);

    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
}


let currentAccount = undefined;
// Event Handler
btnLogin.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("LOGIN");
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(" ")[0]}`;

        containerApp.style.opacity = 1;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();


        updateUI(currentAccount);
    }
});


btnTransfer.addEventListener("click", function (event) {
    event.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find((acc => acc.username === inputTransferTo.value));

    console.log(amount, receiverAcc);
    const isAmountValid = amount > 0 && amount <= currentAccount.balance;

    if (receiverAcc && isAmountValid && receiverAcc?.username !== currentAccount.username) {
        console.log("Transfer is valid.");
        currentAccount.movements.push(-1 * amount);
        receiverAcc.movements.push(amount);

        // Update the UI:
        updateUI(currentAccount);
    }
});

btnClose.addEventListener("click", function(event) {
    event.preventDefault();

    const closedUsername = inputCloseUsername.value;
    const closedUsernamePIN = Number(inputClosePin.value);

    if (currentAccount.username === closedUsername && closedUsernamePIN === currentAccount.pin)  {
        // Both Array.find and Array.findIndex get access to the current index and the current array.
        // Additionally, this was added in ES6 which doesn't work on older browsers.

        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);

        if (index !== -1) {
            accounts.splice(index, 1);
            containerApp.style.opacity = 0;
        }

        inputCloseUsername.value = inputClosePin.value = "";
    }
});

btnLoan.addEventListener("click", function(event) {
    event.preventDefault();
    const amount = Number(inputLoanAmount.value);

    // When the word 'any' is used in an array, it's a good use case for Array.some:
    if (amount > 0 && currentAccount.movements.some(mov => (mov >= 0.1 * amount))) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }

    inputLoanAmount.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function(event) {
    event.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const owners = ["Jonas", "Zach", "Adam", "Martha"];

// Array.sort() is a mutable operation on the array.
console.log(owners.sort());

// By default, the sorting is done via Strings - This will cause problems if
// your array is all integers for example:
let temp = [...script.movements];
console.log(temp.sort());

// In order to properly sort this, you'll have to provide a compare function
// with two arguments a and b that return three values to represent greater, equal, and lesser comparison.
// In this example, we'll sort in ascending order which requires the following values:
// +  1 (a > b)
// + -1 (a < b)
// +  0 (a === b)

console.log(movements);
movements.sort(function (a, b) {
    // if (a === b)
    //     return 0;
    // else if (a > b)
    //     return 1;
    // else
    //     return -1;

    // The following is also valid here:
    // return (a === b)? 0
    //                 : ((a > b)? 1: -1);

    // However, this is equivalent to the following:
    // NOTE: This will ONLY work with integers!
    return a  - b;
    
});
console.log(movements);

// Here's another example of descending order:
movements.sort((a, b) => {
    // if (a === b)
    //     return 0;
    // else if (a > b)
    //     return -1;
    // else
    //     return 1;

    // However, this is equivalent to the following:
    // NOTE: This will ONLY work with integers!
    return b - a;
    
});
console.log(movements);




