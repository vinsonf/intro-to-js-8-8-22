const h1 = document.querySelector('h1');
const h1s = document.querySelectorAll('.heading1');
// console.log('h1', h1[0], h1[1]);

// h1[0].innerHTML = '<span>Goodbye</span>';
// h1[1].innerText = '<span>Goodbye</span>';

// h1[0].style.color = 'red';
// h1[1].style.color = 'blue';

// h1[1].addEventListener('click', () => {
//     h1[1].style.color = 'green';
// });

// h1[0].addEventListener('mouseover', () => {
//     h1[1].style.color = 'green';
//     console.log('hover')
// });



h1s.forEach(h1 => {
    console.log(h1);
});


// FOR LOOP
for(let i = 0; i < 10; i++) {
    console.log(i);
    const h1 = document.createElement('h1');
    h1.innerText = i;
    document.body.appendChild(h1);
}


// While loop
console.log('*******')
let x = 0;
while(x< 10) {
    console.log(x);
    x+= Math.floor(Math.random() * 10);
}

