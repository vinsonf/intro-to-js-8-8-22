if ( 5 > 7) {
    console.log('first test');
} else if ( 5 < 7) {
    console.log('backup test1');
}
else if ('') {
    console.log('backup test2');
}
else if (false) {
    console.log('backup test3');
}
else {
    console.log('else');
}


// no value is falsey
// 0 is falsey
// '' is falsey
// false is falsey
// null is falsey
// undefined is falsey
// NaN is falsey
// everything else is truthy

const date = new Date();
const h1 = document.querySelector('h1');
date.setHours(12);
if (date.getHours() > 20) {
    h1.textContent = 'Too Late!';
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
}
else if (date.getHours() > 18) {
    h1.textContent = 'Good evening!';
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
} else if (date.getHours() >= 12) {
    h1.textContent = 'Good afternoon!';
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'yellow';
}
else if (date.getHours() > 8) {
    h1.textContent = 'Good morning!';
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'white';
} else if (date.getHours() < 8) {
    h1.textContent = 'Too Early!';
} 

const age = prompt('What is your age?');

if (age >= 18) {
    alert('You are old enough to use this site!');
} else if (age > 12 && confirm('Do you have your parents permission to use this site?')) {
    alert('You are old enough to use this site!');
} else {
    alert('Sorry, you are too young to use this site!');
}