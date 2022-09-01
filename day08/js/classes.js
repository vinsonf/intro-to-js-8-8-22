console.log('classes')
import { Enemy } from './characters/enemy.js';
import { Boss } from './characters/boss.js';

function random(){
    let randomInt = Math.floor(Math.random() * 100);
    console.log(randomInt);
}

random();
random();
random();
random();
random();
random();
random();


class Person {
    constructor(name, age, introductionWord ){
        this.name = name;
        this.age = age;
        this.introductionWord = introductionWord;
    }
    greeting(){
        console.log(`${this.introductionWord}, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const person = new Person('John', 27, 'Hello');
const person2 = new Person('Jane', 25, 'Hi');
const person3 = new Person('Joe', 23, 'Hey');
const person4 = new Person('Jill', 21, 'Howdy');
const person5 = new Person('Jack', 19, 'Greetings');


person.greeting();
person2.greeting();
person3.greeting();
person4.greeting();
person5.greeting(); 

const element1 = document.querySelector('h1');
const element2 = document.querySelector('p');

console.dir(element1);
console.dir(element2);

console.log({
    name: 'John',
    age: 27,
    introductionWord: 'Hello'
})
console.log(person);



const enemy = new Enemy();
enemy.takeDamage();
enemy.takeDamage();




const boss = new Boss();
boss.takeDamage();
boss.takeDamage();
boss.takeDamage();
boss.takeDamage();
boss.takeDamage();


console.log('boss', boss);

