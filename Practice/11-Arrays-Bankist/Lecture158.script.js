/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/10/2025 at 12:44 PM
 *
 * Lecture158.script.js
 * Computing Usernames
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js";

const user = "Steven Thomas Williams";
const createUsernames = function(accounts) {
    accounts.forEach(function(account) {
        account.username = account.owner.toLowerCase().split(" ").map((word) => word[0]).join("");
    });
}

// console.log(createUsernames("Steven Thomas Williams"));

createUsernames(script.accounts);
console.log(script.accounts);

