const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let abcs = 'abcdefghijklmnopqrstuvwxyz';

const index = 25;

console.log(letters[index]);
console.log(abcs[index]);


for(let i = 0; i < 26; i++) {
    console.log(letters[i]);
    console.log(abcs[i]);
}

const object = {
    sayHello: function() {}
};

console.log(object.sayHello());

letters.pop();
console.log(letters)

abcs = abcs.replace('z', '');
console.log(abcs);

letters.splice(-1, 2, 'C', 'D');
console.log(letters);