/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 03/16/2026 at 03:24 PM
 *
 * Lecture234.script.js
 * Inheritance Between "Classes": Object.create
 * -----------------------------------------------------------------------------
 */

"use strict";

const Person = function(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;    
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}


const StudentProto = Object.create(Person.prototype);
StudentProto.init = function(fullName, birthYear, course) {
    Person.call(this, fullName, birthYear);
    this.course = course;
};

StudentProto.introduce = function() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
    
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();
