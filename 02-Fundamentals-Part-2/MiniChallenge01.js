/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/05/2024 at 02:16 PM
 *
 * MiniChallenge01.js
 *
 * -----------------------------------------------------------------------------
 */

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "Teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,
    calcAge: function() {
	this.age = 2037 - this.birthYear;
	return this.age;

    },
    getSummary: function() {
	let driverLicenseText = (jonas.hasDriverLicense)? "he has a driver's license" : "he does not have a driver's license";
	return `${jonas.firstName} is a ${jonas.calcAge()}-year old teacher, and ${driverLicenseText}`;
    }
    
    
    
    // bestFriend: "Mic
};

// jonas.bestFriend = jonas.friends[jonas.friends.find("Michael")];
console.log(`${jonas.firstName} has ${jonas.friends.length} friend(s), and his best friend is ${jonas.friends[0]}`);
console.log(`${jonas.getSummary()}`);

