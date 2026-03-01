/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/15/2024 at 01:28 PM
 *
 * Challenge07.js
 *
 * -----------------------------------------------------------------------------
 */

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
	const BMI =  this.mass / (this.height * this.height);
	this.bmi = BMI;
	return BMI;
    }

};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
	const BMI =  this.mass / (this.height * this.height);
	this.bmi = BMI;
	return BMI;
    }
};

if (john.calcBMI() > mark.calcBMI())
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
else
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
