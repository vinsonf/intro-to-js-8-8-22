// variables
const firstName = 'Vinson';
let score = 0;

// var / let / const

const backticks = `backticks`;
// data types
const strings = 'single' || "double" || `${backticks}` || ``;
const numbers = 1 || 2.7 || -3.2 || 0;
const booleans = true || false;

// complex data types
const carMakes = [
    'ford',
    'honda',
    'toyota',
    'chevy',
    'dodge',
    'jeep',
    'mazda',
    'nissan',
    'subaru',
    'audi',
];

const TedLassoCharacters = [
    'Ted Lasso',
    'Jaime Tart',

]




const object1 = {
    name: 'Vinson',
    age: 25,
    species: 'human',
    media: []
}


const objects = {
    firstName: 'Frodo',
    lastName: 'Baggins',
    age: 32,
    species: 'Hobbit',
    media: [
        'The Lord of the Rings',
        'The Silmarillion',
        'The Two Towers',
        'The Return of the King'

    ],
}

const hobbits = [
    {firstName: 'Frodo', lastName: 'Baggins', age: 32, species: 'Hobbit'},
    {firstName: 'Samwise', lastName: 'Gamgee', age: 33, species: 'Hobbit'},
    {firstName: 'Meriadoc', lastName: 'Brandybuck', age: 29, species: 'Hobbit'},
    {firstName: 'Peregrin', lastName: 'Took', age: 30, species: 'Hobbit'},
    {firstName: 'Aragorn', lastName: 'Boromir', age: 37, species: 'Hobbit'},
    {firstName: 'Boromir', lastName: 'Boromir', age: 37, species: 'Hobbit'},
    {firstName: 'Legolas', lastName: '', age: 37, species: 'Hobbit'},
    {firstName: 'Gimli', lastName: '', age: 37, species: 'Hobbit'},
];


const fullName = hobbits[0].firstName + ' ' + hobbits[0].lastName;

// console.log(
//     fullName.toUpperCase(),
//     fullName.toLowerCase(),
//     fullName.length,
//     fullName.includes('Baggins'),
//     fullName.includes('Boromir'),
//     fullName.replace('Baggins', 'Boromir'),
//     typeof fullName,
//     'Frodo'.toUpperCase(),
    
//      );


console.log(
    Number('27'),
    String(9),
    Boolean('hello world'),
    Array(21),
    Object('test')
);

console.log(Math.max(100, 2, 3, 4, 5));
console.log(Math.min(100, 2, 3, 4, 5));
console.log(Math.round(2.1));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.9));
console.log(Math.pow(10, 2));
console.log(Math.sqrt(100));
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-100));
console.log(Math.sign(-100));

const date = new Date(); // current date
const date2 = new Date('2000-01-01'); // specific date // TODO
const date3 = new Date(2000, 0, 1); // specific date
const date4 = new Date('1/01/2000'); // specific date
console.log(date2, date3, date4);
