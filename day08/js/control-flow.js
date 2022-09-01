

// truethy
// falsy
0;
false;
'';
null;
undefined;
NaN;

// if (condition) {}

if (false) {
    console.log('condition is true');
}

if (true) {
    console.log('condition is true');
}

if (0) {
    console.log('condition is falsy');
}

// const firstName = prompt();
// if (firstName) {
//     console.log('you entered a name');
// } else {
//     console.log('you did not enter a name');
// }

if (27 < 0) {
    console.log('condition 1');
} else if(33 > 100){
    console.log('condition 2');
} else {
    console.log('default condition ');
}
debugger;
const answer = 'supervisor';

switch(answer){
    case 'supervisors':
        console.log('answer is a');
    case 'manager':
        console.log('answer is b');
    
    case 'lead':
        console.log('answer is c');
     
    default:
        console.log('answer is not a, b, or c');
}

const firstNumber = parseInt(prompt('enter a number'));
const secondNumber = parseInt(prompt('enter another number'));
console.log(firstNumber + secondNumber);