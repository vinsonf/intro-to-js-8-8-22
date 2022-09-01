// const myAlert = alert('you have a new message'); // always returns undefined
// const myConfirm = confirm('are you sure?'); // always returns boolean
// const myPrompt = prompt('enter your name'); // always returns string unless they cancel then we get null
// console.log(myAlert, myConfirm, myPrompt);


const answer = Math.pow(7, 7);
const randomIndex = Math.floor(Math.random() * answer);
console.log(answer, randomIndex);

const today = new Date();
const tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.pop();
console.log(today, tomorrow, array, newArray);