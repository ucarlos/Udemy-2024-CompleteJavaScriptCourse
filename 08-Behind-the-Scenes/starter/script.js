'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if ((1981 <= birthYear && birthYear <= 1996)) {
            var millennial = true;
            // strange scope
            //const firstName = "Steven";

            const str = `Oh, and you're a millennial, ${firstName}.`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }

        //console.log(str);
        console.log(millennial);
    }
    printAge();
    return age;
}

const firstName = "Jonas";
calcAge(1991);