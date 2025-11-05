/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/05/2025 at 05:47 PM
 *
 * Lecture135.script.js
 * Pretty straightforward lecture.
 * -----------------------------------------------------------------------------
 */

"use strict";
const bookings = [];
// You can assign default parameters that refer to previous parameters:

const BASE_COST = 199;
const createBooking = function(flightNumber, passengers = 1, price = BASE_COST * passengers) {
    const booking = {
        flightNumber,
        passengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

// This is wrong:
createBooking("LH123", 100);

// This is obviously illegal:
// createBooking("LH123", , 123);

// But this is the "legal" way to skip a parameter:
createBooking("LH123", undefined, 1000);


