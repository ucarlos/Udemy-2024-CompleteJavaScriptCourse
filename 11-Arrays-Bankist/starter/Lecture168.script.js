/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/17/2025 at 02:40 PM
 *
 * Lecture168.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";
import * as script from "./export_script.js";

console.log(script.movements);
const lastWithdrawal = script.movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);



