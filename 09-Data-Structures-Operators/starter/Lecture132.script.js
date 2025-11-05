/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/05/2025 at 04:26 PM
 *
 * Lecture132.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";
function mySolution(flights) {
    // This is my solution, not his:
    let flightList = flights.split("+").map((flight) => flight.split(";"));

    let largestFlightStatusLength = 0;
    for (let [flightStatus, ] of flightList) {
        const currentLength = flightStatus.length;
        if (currentLength > largestFlightStatusLength)
            largestFlightStatusLength = currentLength;
    }

    for (let [flightStatus, sourceAirport, targetAirport, time] of flightList) {

        let modifiedFlightStatus = flightStatus.replaceAll("_", " ").padStart(largestFlightStatusLength);

        let destination = `from ${sourceAirport.slice(0, 3).toUpperCase()} to ${targetAirport.slice(0, 3).toUpperCase()}`;
        let [hours, minutes] = time.split(":");
        let timeString = `(${hours}h${minutes})`;

        let joinedString = [modifiedFlightStatus, destination, timeString].join(" ");
        console.log(joinedString);       
    }
}

/**
 *
 * @param {string} flights
 */
function hisSolution(flights) {
    const getCode = str => str.slice(0, 3).toUpperCase();
    for (const flight of flights.split("+")) {
        const [type, from, to, time] = flight.split(";");
        const output = `${type.startsWith("_Delayed")? "🔴" : ""} ${type.replaceAll("_", " ")} ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
        console.log(output);
    }

}



const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log("My Solution: ");
mySolution(flights);
console.log("\n\nHis Solution: ");
hisSolution(flights);





               





