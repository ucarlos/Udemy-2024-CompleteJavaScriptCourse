/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/16/2026 at 03:42 PM
 *
 * Lecture236.script.js
 * Encapsulation: Private Class Fields and Methods
 * -----------------------------------------------------------------------------
 */

"use strict";
class Account {
    // In JavaScript, we only have the following:
    // 1. Private fields    (member variables) SYNTAX: this.#foo <-- Yes, we use # to specify something as private.
    // 2. Private functions (member functions)
    // 3. Public  fields    (member variables)
    // 4. Public  functions (member functions)
    // 5. STATIC  versions of the above 4:

    // Theses variables are public fields:
    locale = navigator.language;
    bank = "Bankist";

    // These variables are private fields:
    #_movements = [];
    #_pin = undefined;
        
    /**
     * @param {string} owner
     * @param {string} currency
     * @param {number} pin
     */
    constructor(ownerName, currency, pin) {
        // We can implement member function and variable encapsulation using something called
        // class fields:
        
        this._owner = ownerName;
        this._currency = currency;
        this.#_pin = pin;
        // this.movements = [];
        // This isn't needed if the variable is defined above.
        // this.locale = navigator.language;
        console.log(`Thanks for opening an account, ${this._owner}!`);
    }

    // These member functions are public functions (As you already know)
    /**
     * @param {number} val
     */
    deposit(val) {
        this.#_movements.push(val);
    }
    
    /**
     * @param {number} val
     */
    withdraw(val) {
        this.deposit(-val);
    }

    /**
     * @param {number} val
     */
    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Amount ${val} approved.`);
        }
    }

    // Finally, this is an example of a private member functions:
    /**
     * @param {number} val
     */
    #approveLoan(val) {
        return val != undefined;
    }

    getMovements() {
        // This function isn't chain-able.
        return this.#_movements;
    }    
}

const account1 = new Account("Jonas", "EUR", 1111);
account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
account1.approveLoan(1000);

console.log(account1);
console.log(account1.movements);
