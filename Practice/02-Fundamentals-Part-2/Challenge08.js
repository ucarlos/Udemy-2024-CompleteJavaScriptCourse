/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/29/2024 at 10:46 PM
 *
 * Challenge08.js
 * Let's improve Steven's tip calculator even more, this time using loops!
 * Your tasks:
 * 1. Create an array called bills containing all 10 test bill values.
 *
 * 2. Create empty arrays for the tips and the totals (tips and totals)
 *
 * 3. Use the calcTip function we wrote before (included in the starter code) to
 * calculate tips and total values (bill + tip) for every bill value in the bills
 * array. Use a for loop to perform the 10 calculations!
 *
 * TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
 *
 * BONUS:
 *
 * Write a function calcAverage which takes an array called arr as an argument.
 * This function calculates the average of all numbers in the given array.
 * This is a DIFFICULT challenge (we haven't done this before)! Here is how to
 * solve it if you feel like it:
 * 
 * First, you will need to add up all values in the array. To do the addition,
 * start by creating a variable sum that starts at 0. Then loop over the array
 * using a for loop. In each iteration, add the current value to the sum variable.
 * This way, by the end of the loop, you have all values added together.
 * To calculate the average, divide the sum you calculated before by the length
 * of the array (because that's the number of elements).
 * 
 * Call the function with the totals array.5c
 * 👋 OPTIONAL: You can watch my solution in video format in the next lecture.
 * -----------------------------------------------------------------------------
 */

function calcTip(bill_amount) {
    return (50 <= bill_amount && bill_amount <= 300)? (.15 * bill_amount) : (.20 * bill_amount);
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];


for (let i = 0; i < bills.length; i++) {
    const tempTip = calcTip(bills[i]);
    const tempTotal = bills[i] + tempTip;

    tips.push(tempTip);
    totals.push(tempTotal);
}

console.log(calcAverage(totals));
