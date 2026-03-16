/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/16/2026 at 03:30 PM
 *
 * Lecture235.script.js
 * Another Class Example
 * -----------------------------------------------------------------------------
 */

"use strict";

class Account {
    /**
     * @param {string} owner
     * @param {string} currency
     * @param {number} pin
     */
    constructor(ownerName, currency, pin) {
        this._owner = ownerName;
        this._currency = currency;
        this._pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this._owner}`);
    }

    deposit(val) {
        this.movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    approveLoan(val) {
        return true;
    }
    
    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Amount ${val} approved.`);
        }
    }
}

const account1 = new Account("Jonas", "EUR", 1111);
account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
account1.approveLoan(1000);

console.log(account1);
