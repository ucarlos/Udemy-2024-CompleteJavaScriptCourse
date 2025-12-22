/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/15/2025 at 02:29 PM
 *
 * Lecture164.script.js
 * The find method
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js";

// The Array.find function ONLY searches for the first item that matches the condition.
const firstWithdrawl = script.movements.find(mov => mov < 0);

console.log(script.movements);
console.log(firstWithdrawl);

console.log(script.accounts);

// In this case, we will receive an object item.
const account = script.accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);

// For-of loop alternative by the way.
let find = undefined;
for (const scriptAccount of script.accounts)
    if (scriptAccount.owner === "Jessica Davis")
        find = scriptAccount;

console.log(find);



