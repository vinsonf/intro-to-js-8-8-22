
const string = '';
let boolean = true;
var number = 1; // DO NOT USE var 

const array = [ // Index starts from 0
    'string',
    true,
    1,
    {
        key: 'value'

    },
    [{array: [1, 2, 3]}]
];
const object = {
    key: 'value'
};

/////////////

// fasley and truthy

const falsey = [
    false,
    0,
    '',
    null, // null is falsy
    undefined, // undefined
    NaN // Not a number
];

const user = {}; // an empty object is truthy

/////////////
// Date and Math

const date = new Date();
console.log('get date', date.getDate());
console.log('get day', date.getDay());
console.log('get full year', date.getFullYear());
console.log('get hours', date.getHours());
console.log('get minutes', date.getMinutes());
console.log('get seconds', date.getSeconds());
console.log('get milliseconds', date.getMilliseconds());
console.log('get time', date.getTime());

console.log('set date', date.setDate(1));
console.log('set full year', date.setFullYear(1));
console.log('set hours', date.setHours(1));
console.log('set minutes', date.setMinutes(1));
console.log('set seconds', date.setSeconds(1));
console.log('set milliseconds', date.setMilliseconds(1));

date.setDate(date.getDate() + 1);

const math = Math;
console.log('random', math.random());
console.log('floor', math.floor(1.1));
console.log('ceil', math.ceil(1.1));
console.log('round', math.round(1.1));
console.log('abs', math.abs(-1.1));
console.log('max', math.max(1, 2, 3, 4, 5));
console.log('min', math.min(1, 2, 3, 4, 5));
console.log('pow', math.pow(2, 3));
console.log('sqrt', math.sqrt(4));

/////////////

// Control flow

if (true) {
    console.log('run this code');
}

if (false) {
    console.log('do not run this code');
}

if (false) {
    console.log('do not run this code');
} else {
    console.log('run this code');
}

const age = 18;
const parentsPermission = true;
if (age >= 18) {
    console.log('do not run this code');
}
else if (parentsPermission) {
    console.log('run this code');
}
else if (true){
    console.log('run this code');
}
else {
    console.log('do not run this code');
}

switch(age)    {
    case 18:
        console.log('do not run this code');
        break;
    case 19:
        console.log('run this code');
        break;
    case 20:
        console.log('run this code');
        break;
    default:
        console.log('do not run this code');
}

/////////////   

// Functions

function sayHello(text, text2) {
    console.log(text2);
    return text;
}
const result = sayHello(1,2);
console.log('result', result);

// Method
const user1 = {
    name: 'John',
    sayHello: function(text) {
        console.log(text, this.name);
    }
}

user1.sayHello('Hello');

// Arrow function
const sayHello2 = (text, text2) => {
    console.log(text);
}

function sayHello(text, text2) {
    console.log(text2);
    return text;
}

function myFunction(callback){ // callback is a function that is passed to another function
    callback();
}

myFunction(() => {console.log('this is an arrow function')});
myFunction(() => {console.log('this is another arrow function')});

const orderPizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('pizza is ordered');
    }, 5000);
});

function deliverPizza () {
    return  new Promise((resolve, reject) => {
       
        setTimeout(() => {
            resolve('pizza is ready');
        }, 4000)
     
    });
}

orderPizzaPromise.then((result) => {
    console.log(result);
    return deliverPizza();
}).then((result) => {
    console.log(result);
})

const baseUrl = 'https://api.thecatapi.com/v1/images/';
const endpoint = 'search';
fetch(baseUrl + endpoint).then((response) => {
    console.log(response);
    return response.json();
}).then(data => {
    console.log(data);
    const img = document.createElement('img');
    img.src = data[0].url;
    document.body.appendChild(img);
})