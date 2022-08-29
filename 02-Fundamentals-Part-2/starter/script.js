/*
// Avoid bugs - Display error in console
'use strict';

let hasDriversLicense = false;
const passTest = true;

// Variable spelling mistake
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

// Reserved word error display
const interface = 'Audio';


// Functions

function logger() {
    console.log('My name is Shah');
}

// Calling  / Running // Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);


//Function Declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);


//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


//Arrow function (Expression shorter)
// (=>) is (return)
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


// Function calling other Function
function cutPieces(fruit) {
    return fruit * 5;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orrangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orrangePieces} piece of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`
    } else {
        return `${firstName} has already Retired`;
    }
    // return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let dolphinScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);
console.log(dolphinScore, koalasScore);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log(`No winner`);
    }
}
checkWinner(dolphinScore, koalasScore);

dolphinScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(dolphinScore, koalasScore);
checkWinner(dolphinScore, koalasScore);


// Arrays
// use this literal syntax
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends)

const years = new Array(1191, 1984, 2008, 2020);
console.log(friends[0])
console.log(friends[2])
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay';
console.log(friends);
*/
