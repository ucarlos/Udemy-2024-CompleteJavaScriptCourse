/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/16/2026 at 01:23 PM
 *
 * Lecture231.script.js
 * Inheritance Between "Classes": Constructor Functions
 * -----------------------------------------------------------------------------
 */

"use strict";

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;    
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
    // In order to make this a child class (or subclass) of Person, you'll need to use Function.call
    Person.call(this, firstName, birthYear);

    this.course = course;
}

// We need to make sure that Student.prototype inherits functions from Person.prototype. 
// Otherwise, we'll get an error trying to access any functions in Person.prototype.
// This can be done via Object.create(). 
Student.prototype = Object.create(Person.prototype);
// Additionally, this needs to be done before defining any functions in Student.prototype -
// Otherwise, we'll be overwriting it.

// Also: You need to update the prototype to point to Student instead of Person:
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// Mike is an instance of the subclass, base class, and the Object class:
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);
