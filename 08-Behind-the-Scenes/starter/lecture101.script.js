/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 08/04/2025 at 02:58 PM
 *
 * lecture101.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);    
}

calcAge(1980);
const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
};

jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;









