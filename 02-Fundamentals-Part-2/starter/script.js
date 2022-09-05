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

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)



//ADD ELEMENT
// Push is function that called to attached with array at last
const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)
// Unshift is function that called to attached with array at first
friends.unshift('John');
console.log(friends)

//REMOVE ELEMENT
friends.pop();
const popped = friends.pop();
console.log(popped)
console.log(friends)

friends.shift();
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

//True or False
friends.push(23);
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(23))

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}
*/
/*


Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀


// Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules 
//above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

*/
const calcTip = function (bill) {
    //const bill = [125, 555, 44];
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    //console.log(bill)
}
console.log(calcTip(100))

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total)



/*
function calcTip(bill) {
    const bill = 100;
    if biil <= 30 && bill >= 300 ? bill * 0.15 : bill * 0.20;
}
console.log(calcTip)
*/

