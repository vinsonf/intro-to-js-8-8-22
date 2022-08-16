const primitives = {
    number: 0,
    string: '',
    boolean: true,
    undefined: undefined, // not sure empty
}

const others = {
    symbol: Symbol(),
    bigInt: BigInt(0),
}

const compound = {
    array: [],
    object: {},
    null: null, // decided empty
}

const option1 = 'Ryu';
const option2 = 'Ken';

let selectedCharacter = null;

function selectCharacter(character) {
    selectedCharacter = character;
}
function unselectedCharacter() {
    selectedCharacter = null;
}

var selectedStage = null;
selectedTeammate = null;

// scope 
// redeclaration

// var selectedStage = null;
// let selectedCharacter = null;

// DO NOT USE VAR UNLESS YOU HAVE A GOOD REASON TO DO SO


// OPERATORS

let x = 1;

// Arithmetic
// + - * / %

console.log(x + 1);
console.log(x - 1);
console.log(x * 10);
console.log(x / 2);
console.log(x); // x is not changed

// ASSIGNMENT OPERATORS
// = += -= *= /= %=
console.log(x += 1);
console.log(x -= 1);
console.log(x *= 10);
console.log(x /= 2);
console.log(x); // x has changed

// Comparison
// < > <= >= == !=
// always return boolean
console.log(x < 1);
console.log(x > 1);
console.log(x <= 1);
console.log(x >= 1);
console.log(x == 1);
console.log(x != 1);
// Logical
// && || !
console.log(x < 1 && x > 1 && x != 6); // false
console.log(x < 1 || x > 1 || x != 5); // true
console.log( !( x != 5) )

// CONDITIONAL OPERATORS
// if else
// switch case
// ternary operator


