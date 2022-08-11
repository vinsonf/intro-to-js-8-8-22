// document.querySelector('h1').innerHTML = 'Hello World';

// DATA TYPES
firstName = 'John';
score = 100;
isPresent = true;

user1 = {
    firstName: 'John',
    score: 100,
    isPresent: true
}

user2 = {
    firstName: 'Joe',
    score: 90,
    isPresent: false
}

users = [user1, user2, ];

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
tens = [10, 20, 30, 40, 50, 60, 70, 80, 90];
hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// ACCESSING DATA
selectedUser = 0;
selectedItem = 'score';

// console.log(users);
// console.log(users[1])// access by bracket notation
// console.log(users[0].firstName); // access by dot notation
// console.log(users[selectedUser].score);
// console.log(users[1]['score']);
// console.log(users[0]['firstName']); // access by both by bracket notation

test0 = 0;
// VARIABLE TYPES
const test = 1;
let test2 = 2;
var test3 = 3;



var test3 = 10;
// console.log(test3);

// declare a variable and assign a value and then reassign the value

constVariable = {
    declare: true,
    redeclare: false,
    assign: true,
    reassign: false,
}
const myConst = true;
// myConst = false;
// const myConst = false;


letVariable ={
    declare: true,
    redeclare: false,
    assign: true,
    reassign: true,
}
let myLet = true;
myLet = false;
// let myLet = false;


varVariable = {
    declare: true,
    redeclare: true,
    assign: true,
    reassign: true,
}
var myVar = true;
myVar = false;
var myVar = false;

whatIsThis = true;

// OPERATORS
// Arithmetic Operators
// + - * / %
console.log('operators');
console.log(1 + 1);
console.log(10 - 1);
console.log(10 * 2);
console.log(10 / 2);
console.log(7 % 2);

// Assignment Operators
// = += -= *= /= %=
console.log('assignment operators');
let x = 10;
console.log(x); // 10
console.log(2 + x); // 12
console.log(x); // 10
x += 2; // 12
x += 2; // 14
console.log(x); // 14
x %= 3;

console.log(x);

// Comparison Operators
// == != === !== > < >= <=
// always return boolean

console.log( "20 == '20'",  20 == '20'); // true
console.log( 20 != 20); // false
console.log( 20 === 20); // true
console.log( 20 !== 20); // false
console.log("20 === '20'", 20 === '20'); // false

// strings 
let string1 = 'Hello' + 
': ';
let string2 = "Worl" + 
"d";
let string3 = `

${string1}    

${string2}      ${10 * 10 + 1}



`;
console.log(string3);

let number1 = 0;
let number2 = 1.27;
let number3 = -1.27;

console.log(200207 * 100_000_000 > Infinity);

console.log(7 * {name: 'Joe'});
let myBigInt = BigInt(7);
console.log(10n * 100_000_000_000n);

console.log('hello' === 'hello');
let mySymbol = Symbol('mySymbol');
let mySymbol2 = Symbol('mySymbol');

console.log(mySymbol === mySymbol2);

console.log(typeof '')

console.log(typeof 1)

console.log(typeof true)

console.log(typeof mySymbol);
console.log(typeof myBigInt);

// create an element and append it to the body
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const li = document.createElement('li');

// change text content of the h1 element
li.innerHTML = user1.firstName;


// append the h1 element to the body
document.body.append(h1);
document.body.append(ul);
ul.append(li);

// remove the h1 element from the body
h1.remove();


// retrieve elements from document

const p = document.querySelector('p');

// interact with the elements styles
p.classList.add('red');
p.style.color = 'red';




