/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/08/2024 at 03:57 PM
 *
 * assignments.js
 *
 * ------------------------------------------------------------------------------
 */

function print_banner(lecture_number) {
    if (lecture_number != 1)    
	console.log("\n");
    
    console.log("--------------------------------------------------------------------------------");
    console.log(`Lecture ${lecture_number} Code: `)
    console.log("--------------------------------------------------------------------------------");
    console.log("\n");   
}

function lecture1() {
    let country = "USA";
    let continent = "North America";
    let population = 342

    print_banner(1);
    console.log("Country: " + country);
    console.log("Continent: " + continent);
    console.log("Population: " + population + " Million");

}

function lecture2() {
    // Number, String, Boolean, Null, Undefined, Symbol (Const), BigInt
    let isIsland = false;    
    let language;
    let country = "USA";
    // let continent = "North America";
    let population = 342;

    print_banner(2);
    console.log("Type of isIsland: " + typeof isIsland);
    console.log("Type of population: " + typeof population);
    console.log("Type of country: " + typeof country);
    console.log("Type of language: " + typeof language);    
}

function lecture3() {
    print_banner(3);
    
    const language = "English";
    const isIsland = false;
    const country = "USA";
    let poulationInMillions = 342;

    // This will cause an TypeError since language is immutable:
    language = "Spanish";        
}


function lecture4() {
    print_banner(4);
    let populationInMillions = 342;
    console.log("Half Population: " + populationInMillions / 2 );
    
    populationInMillions += 1;
    console.log("Increased Population to " + populationInMillions + " Million.");

    console.log("Does the USA have more people than Finland (6 Million)?  " + (populationInMillions > 6));
    console.log("Does the USA have less people than the average country (33 Million)? " + (populationInMillions < 33));


    const countryName = "USA";
    const continent = "North America";
    const language = "English";

    const description = countryName + " is in " + continent + ", and its " + populationInMillions + " million people speak " + language;
    console.log(description);
    
    
}

function lecture5() {
    print_banner(5);
    let populationInMillions = 342;
    console.log("Half Population: " + populationInMillions / 2 );
    
    populationInMillions += 1;
    console.log("Increased Population to " + populationInMillions + " Million.");

    console.log("Does the USA have more people than Finland (6 Million)?  " + (populationInMillions > 6));
    console.log("Does the USA have less people than the average country (33 Million)? " + (populationInMillions < 33));

    const countryName = "USA";
    const continent = "North America";
    const language = "English";
    
    const description = `${countryName} is in ${continent}, and its ${populationInMillions} million people speak ${language}.`;    
    console.log(description);
}

function lecture6() {
    print_banner(6);
    const USPopulationInMillions = 342;
    const averageCountryPopulationInMillions = 33;

    if (USPopulationInMillions > averageCountryPopulationInMillions)
	console.log("USA's population is above average.");
    else
	console.log(`USA's population is ${averageCountryPopulationInMillions - USPopulationInMillions} million below average.`);
    

}

function lecture7() {
    print_banner(7);
    console.log('9' - '5'); // 42
    console.log('19' - '13' + '17'); // 617
    console.log('19' - '13' + 17); // 23
    console.log('123' < 57); // false
    console.log(5 + 6 + '4' + 9 - 4 - 2); // 114 + 9 - 4 - 2 => 117

}

function falsy_and_truthy_values() {
    // The five falsy values are as follows: 0, '', undefined, null, NaN
    console.log(Boolean(0));
    console.log(Boolean(''));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean(NaN));
}

function lecture8() {
    print_banner(8);
    let numNeighbours = Number(prompt(`How many neighboring countries does your country have?`));
   
    if (numNeighbours === 1)
	console.log("Only 1 Border!");
    else if (numNeighbours > 1)
	console.log("More than 1 Border!");
    else
	console.log("No Borders!");

}

function lecture9() {
    print_banner(9);
    countryName = "New Zealand";
    countryLanguage = "English";
    countryPopulationInMillions = 5.200;
    isIsland = true;

    if (countryLanguage === "English" && !isIsland && countryPopulationInMillions < 50)
	console.log(`You should live in ${countryName} :)`);
    else
	console.log(`${countryName} does not meet your criteria :(`);
}


function lecture_switch() {
    let inputLanguage = prompt("Please enter an language: ").toLocaleLowerCase();

    switch (inputLanguage) {
    case 'chinese':
    case "mandarin":
	window.alert("MOST Number of native speakers!");
	break;
    case "spanish":
	window.alert("2nd Place in number of native speakers.");
	break;
    case "english":
	window.alert("3rd Place in number of native speakers.");
	break;
    case "hindi":
	window.alert("Number 4");
	break;
    case "arabic":
	window.alert("5th most spoken language");
	break;
    default:
	window.alert("Great Language too :D");
    }

}


function main() {
    // lecture1();
    // lecture2();
    // lecture3();
    // lecture4();
    // lecture7();
    // lecture8();
    // lecture9();
    lecture_switch();
}

// Run the program:
main();
