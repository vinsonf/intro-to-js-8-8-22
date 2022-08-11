// document.querySelector('h1').innerHTML = 'Hello World';


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

selectedUser = 0;
selectedItem = 'score';

console.log(users);
console.log(users[1])// access by bracket notation
console.log(users[0].firstName); // access by dot notation
console.log(users[selectedUser].score);
console.log(users[1]['score']);
console.log(users[0]['firstName']); // access by both by bracket notation

