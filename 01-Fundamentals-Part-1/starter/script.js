/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is FUN');

40 + 8 + 23 - 18;
console.log(40 + 8 + 23 - 18);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
let first_name = 'jonas';

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(first_name);

// illegal variable = &, start with number 3years, new as reserved in javascript, never use CAPS.

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);


// Boolean

// Declare Value
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

// Change Value
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// Always use const instead let
let age = 30;
age = 31;
console.log(age);

// const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher';
console.log(job);

// Global Scope
lastName = 'shah';
console.log(lastName);


// Basic Operators

// Minus Operator
const now = 2022;
const ageShah = now - 1983;
const ageSyafiq = now - 1993;
console.log(ageShah, ageSyafiq);
// 2 ** 3 means = the power of = 2 * 2 * 2
// console.log(ageShah + 2, ageSyafiq / 2, 2 ** 3);

const firstName = 'Shah';
const lastName = 'Ramly';
console.log(firstName + ' ' + lastName);

//Assignment Operator
let x = 10 + 5;
x += 10; // x= means x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);

//Comparison Operator
console.log(ageShah > ageSyafiq); // > is greater than
console.log(ageSyafiq >= 18); // > is greater than or equal
console.log(ageShah < ageSyafiq); // > is less than
console.log(ageSyafiq <= 18); // > is less than or equal = 18

const isFullAge = ageShah >= 18;

console.log(now - 1991 > now - 2018)

const now = 2022;
const ageShah = now - 1983;
const ageSyafiq = now - 1993;
console.log(now - 1983 > now - 1993);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y) // both equal to 10 - right to left

const averageAge = (ageShah + ageSyafiq) / 2; //Grouping operators calculate first
console.log(ageShah, ageSyafiq, averageAge)


// String & Template Literals
const firstName = 'Shah';
const job = 'IT';
const birthYear = '1983';
const year = '2022';

const shah = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;

console.log(shah)

console.log(`Multiple
Enter
Lines
`)


// if else statement
const age = 19;

if (age >= 18) {
    console.log(`Shah can start driving license`)
} else {
    const yearLeft = 18 - age;
    console.log(`Shah is too young. Wait another ${yearLeft} years :)`)
}

const birthYear = 1983;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)


// type convertion
const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);
// NaN - Not a Number
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


// type coercion (Auto convert, no need to put String() or Number())
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2'); // Convert String to Number

let n = '1' + 1;
n = n - 1;
console.log(n)


// Truthy and Falsy

// Tyoe of Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100; // Convert to False '0' and '100' is true
if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("Yay! Height is defined");
} else {
    console.log("Height is undefined");
}

// Equality Operators == vs ===
const age = '18';
// === Triple equal avoid coercion = false 
//( Always use this === )
if (age === 18) console.log('You just became and adult :D (strict)');
// == Double equal accept coercian = true
if (age == 18) console.log('You just became and adult :D (loose)');

const favourite = Number(prompt("What's is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('Cool! 7 is also an amazing number');
} else if (favourite === 9) {
    console.log('Cool! 9 is also an amazing number');
} else {
    console.log('Number is not 23, 7, 9');
}
// !== is not
if (favourite !== 23) console.log('Why not 23?');

// Boolean Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // && = and (priority FALSE)
console.log(hasDriversLicense || hasGoodVision); // && = or (priority TRUE)
console.log(!hasDriversLicense); // && = or (priority FALSE)

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Shah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Shah is able to drive!');
} else {
    console.log('Someone else should drive...');
}


const dolphins = (90 + 100 + 100) / 3;
const koalas = (90 + 100 + 100) / 3;
console.log(dolphins, koalas)

// if (dolphins > koalas) {
//     console.log('Dolphins is the winner');
// } else {
//     console.log('Koalas is the winner');
// }

if (dolphins > koalas && dolphins >= 100) {
    console.log('Dolphins is the higher score');
} else if (koalas > dolphins && koalas >= 100) {
    console.log('Koalas is the higher score');
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log('Both is winners');
} else {
    console.log('No team wins the trophy');
}


// Switch Statement
const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan My course structure');
        console.log('Go to coding meetup');
        break; // separate
    case 'tuesday':
        console.log('Prepare theory videos');
        break; // separate
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break; // separate
    case 'friday':
        console.log('Record videos');
        break; // separate
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break; // separate
    default:
        console.log('Not a valid day');
}

// Compare with if else - Switch is better
if (day === 'monday') {
    console.log('Plan My course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day');
}


3 + 4 // expressions - produce value
!false // not false

if (23 > 10) {
    const str = '23 is bigger'; // Statement / 23 is bigger = expressions
}
const me = 'Jonas' // 'me'This is expression
console.log(`I'm ${2037 - 1991} years old`) // This is expressions

// Conditional Ternary Operator
// drink is variable
// age >= 18 is condition
// ? is if
// : is else
const age = 13;
// age >= 18 ? console.log(`I like to drink coke`) : console.log(`I don't drink`);

// The best practise
const drink = age >= 18 ? `I like to drink coke` : `I don't drink`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Coke';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `I like to drink coke` : `I don't drink`}`)


const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip} and the total is ${bill + tip}`)
*/

