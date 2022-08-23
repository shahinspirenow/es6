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
*/