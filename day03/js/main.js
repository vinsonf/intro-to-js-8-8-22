
function add(a, b) {
    console.log(a + b);
    return a + b;
}
function lotsOfWork(x) {
    console.log(x += 1);
    console.log(x -= 1);
    console.log(x *= 10);
    console.log(x /= 2);
    console.log(x); // x has changed
    return x;
}

// usage of functions
// manipulation of variables
// input output

// reason to use functions
// modularity / reusability
// abstraction
// clarity
// use later / repeat later

add(1, 2);
add(5, 2);
let myAnswer = lotsOfWork(10);
myAnswer = lotsOfWork(20);

// Methods
// functions that are attached to objects

// string methods
let firstName = "    who is John?    ".trim();
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.length);
console.log(firstName.indexOf("n"));
console.log(firstName.endsWith("?"));
console.log(firstName.includes("n"));
console.log(firstName.replace("J", "j"));
console.log(firstName.slice(0, -1));
console.log(firstName.substring(0, 2));
console.log(firstName.substr(0, 5));
console.log(firstName.split(""));
console.log(firstName.split(" "));
console.log(firstName.trim());
console.log(firstName.trim().split(" "));

// pop up methods

// let alertAnswer = alert('You have a virus'); // statement
// reason to use
// alert / tell the user something
// does not return anything

// let confirmAnswer = confirm('You have unsaved work. Are you sure you want to exit without saving?'); // ok or cancel
// reason to use
// ask the user for input
// returns a boolean

// let promptAnswer = prompt('What is your name?'); // input
// reason to use
// ask the user for input
// returns a string

// console.log(alertAnswer, confirmAnswer, promptAnswer);


Math.floor(9.9);
Math.ceil(9.1);
Math.round(9.5);
Math.random(); // random number between 0 and 1

Math.pow(2, 3);
Math.sqrt(9);
Math.abs(-9);
Math.max(1, 2, 3, 4, 5);
Math.min(1, 2, 3, 4, 5);

const students = [
    'that was cool', // 0
    'i did not like that', // 1
    'salad', // 2
    'pizza', // 3
    'tacos', // 4
    'doctor', // 5
    'item', // 6
    'nintendo', // 7
    'atari', // 8
    'xbox',// 9
    'playstation', 
];

const randomDecimal = Math.random();
const decimalMultipliedByStudentsLength = randomDecimal * students.length;
const floored = Math.floor(decimalMultipliedByStudentsLength);
console.log(floored)
console.log(students[floored]);


const date = new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()); // 0 - 11
console.log(date.getDate());
console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());

const date2 = new Date('8/14/2022');
console.log(date2.getDay());

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.setMonth(date.getMonth() - 2000);
console.log(date);


function randomItem(array){
    const decimal = Math.random();
    const decimalMultiplyByArrayLength = decimal * array.length;
    const floored = Math.floor(decimalMultiplyByArrayLength);
    return array[floored];
}

console.log(randomItem(days));
console.log(randomItem(months));
console.log(randomItem(students));
// day0
// day1
// day2
// day3
// day4
// day5
// day6
// day7
// day8
// day9


// day10
// day11
// day12
// day13
// day14
// day15
// day16
// day17
// day18
// day19


// day20
// day21
// day22
// day23




