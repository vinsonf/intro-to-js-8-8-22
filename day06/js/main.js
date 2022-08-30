// let score = 0;


// setTimeout(function() {
//     console.log('Hello');
//     console.log(score);
// }, 10000) 
// console.log(score)
// score += 1;

// console.log(score);


// callback function
// a function that is passed to another function as an argument


// function orderPizza(callback1, callback2, callback3) {
//     console.log('order pizza')
//     setTimeout(function() {
//         console.log('done ordering pizza')
//         callback1( callback2, callback3);
//     }, 4000)
// }

// function makePizza( callback2, callback3) {
//     console.log('making pizza');
//     setTimeout(function() {
//         console.log('done making pizza')
//         callback2(callback3);
//     }, 4000)
// }

// function bakePizza(callback3) {
//     console.log('baking pizza');
//     setTimeout(function() {
//         console.log('done baking pizza')
//         callback3();
//     }, 4000)

// }

// function deliverPizza() {
//     console.log('delivering pizza');
// }

// orderPizza(makePizza, bakePizza, deliverPizza);



const orderPizzaPromise = new Promise(function(resolve, reject){
    console.log('order pizza')
    setTimeout(function() {
        resolve('done ording pizza!');
    }, 4000)
});

orderPizzaPromise
.then(function(result){
    return makePizza();
}).then(function(result) {
    return bakePizza();
}).then(function(result) {
    return deliverPizza();
})

function makePizza() {
    return new Promise(function(resolve, reject){
        console.log('making pizza');
        setTimeout(function() {
            resolve('done making pizza');
        } , 4000)
    });
}

function bakePizza() {
    return new Promise(function(resolve, reject){
        console.log('baking pizza');
        setTimeout(function() {
            resolve('done baking pizza');
        } , 4000)
    });
}

function deliverPizza() {
    return new Promise(function(resolve, reject){
        console.log('delivering pizza');
        setTimeout(function() {
            resolve('done delivering pizza');
        } , 4000)
    });
}



fetch('https://pokeapi.co/api/v2/pokemon/charmander')
.then(function(data){
    console.log(data);
    return data.json();
}).then(function (data) {
    console.log(data);
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    img.addEventListener('click', function() {
        if (img.src === data.sprites.front_default) {
        img.src = data.sprites.back_default;
        } else {
        img.src = data.sprites.front_default;
        }
    });
    img.style.width = '200px';
    document.body.appendChild(img);
    return fetch(data.moves[0].move.url);
}).then(function(data){
    return data.json();
}).then(function(data){
    console.log(data);
})

fetch('http://api.github.com/users/vinsonf').then((res) => {
    return res.json();
}).then((data) => {
    console.log('done');
    console.log(data);
    return fetch(data.followers_url)
}).then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
    data.forEach((user) => {
        const img = document.createElement('img');
        img.src = user.avatar_url;
        img.style.width = '100px';
        document.body.appendChild(img);
    })
})