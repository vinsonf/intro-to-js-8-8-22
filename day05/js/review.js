

const primitiveDataTypes = {
    string: 'string',
    number: 'number',
    boolean: 'boolean',
};
const dataTypes = [
    'string',
    'number',
    'boolean',
];


const falsy = {
    false: false, // boolean
    0: 0, // number
    '': '', // string

    NaN: NaN, // number
    null: null, // object
    undefined: undefined, // undefined
}

if ('hello world') {
    console.log('hello world');
}

if ('NaN'){ // truethy
    console.log('NaN');
}

if (0) {
    console.log(0);
} else if ('0') {
    console.log(1);
}

const value = Math.random();
// a random number between 0 and 1
// always a decimal number

const randomNumber = value * 100;
// a random number between 0 and 100
// always a decimal number

let randomNumberInt = Math.floor(randomNumber);
// a random Integer between 0 and 100
// always a integer number
// does not include 100

randomNumberInt = Math.ceil(randomNumber);
// a random Integer between 0 and 100
// always a integer number
// does not include 0

randomNumberInt = Math.round(randomNumber);
// a random Integer between 0 and 100
// always a integer number
// includes 0 and 100

const randomDecade = [
    '1960',
    '1970',
    '1980',
    '1990',
    '2000',
    '2010',
];

const randomDecadeInt = Math.floor(Math.random() * randomDecade.length);
// a random Integer between 0 and 5
// always a integer number
// does not include 5
// debugger;
const randomDecadeString = randomDecade[randomDecadeInt];
console.log(randomDecadeString);

const date = new Date();
const currentYear = date.getFullYear();
const randomYear = Math.floor(Math.random() * (currentYear - 1960 + 1) + 1960);
console.log(randomYear);


// what is scope?
// scope is where a variable is available
// whenever you are not in a function or block of code or object you are in the global scope

// debugger;
function myFunction() {
    const myVariable = 'hello'; // local scope
    console.log(myVariable);
}

myFunction();

let object = {
    myVariable: 'hello',
    myFunction: function() {
        console.log(this.myVariable);
    }
}

if (true) {
    const myVariable = 'hello';
    console.log(myVariable);
}

{
    const myVariable = 'hello';
    console.log(myVariable);
}

// console.log(myVariable); // global scope

function createTitles(text){
    const element =  document.createElement('h1');
    element.innerText = text;
    document.body.appendChild(element);
}
createTitles('hello');
createTitles('world');

const player1 = {
    username: 'John',
    health: 100,
    weapon: 'sword',
    attack() {
        return this.weapon;
    },
    takeDamage() {
        this.health -= 10;
        console.log(this)
    }
}
const player2 = {
    username: 'Jane',
    health: 100,
    weapon: 'sword',
    attack() {
        return this.weapon;
    },
    takeDamage() {
        this.health -= 10;
        console.log(this)
    }
}

console.log(player2.username);
const name = 'earth/globe';
// debugger;
function country() {
    const name =  'USA';
    const capital = 'Washington D.C.';
    console.log(name);
    function state(){
        const name = 'California';
        const capital = 'Sacramento';
        console.log(name);
        function city() {
            const name = 'Fresno';
            console.log(name);
            const capital = 'Bitwise';
            console.log(capital);

        }
        city();

        (() => {
            
            console.log(name);
            const capital = 'Bitwise';
            console.log(capital);
        })();
    }
    state();
    function state2(){
        name = 'Texas';
        console.log(name);
    }
}
country();

const player = {
    player: {
        player: {
            player: {}
        }
    }
}

console.log(player.player.player.player);

function createBankAccount() {
    let balance = 0;
    let transactions = [];
    let accountNumber = Math.floor(Math.random() * 1000000);
    return {
        deposit(amount) {
            balance += amount;
            console.log(balance);
            transactions.push({
                type: 'deposit',
                amount: amount,
            })
        },
        withdraw(amount) {
            balance -= amount;
            console.log(balance);
            transactions.push({
                type: 'withdraw',
                amount: amount,
            })
        },
        last4Transactions() {
            return {
                transactions: transactions.slice(-4),
                accountNumber : accountNumber,
            }
        }
    }
}

const bankAccount1 = createBankAccount();
const bankAccount2 = createBankAccount();


// a parent scope can NOT access a child scope
// a child scope can access a parent scope
// a sibling scope can NOT access a sibling scope
// scope first checks the local scope then the parent(s) scope then the global scope


// parents are giving access to children
// children are stingy with access to parents or siblings

const player3 = {
    username: 'John',
    friends: ['Jane', 'Bob', 'John'],

    hasSameName(){
        return this.friends.some((friend) => {
            console.log(this);
            return this.username === friend;
        });
    }
}

console.log(player3.hasSameName());

