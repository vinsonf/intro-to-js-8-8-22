let cardOne = null;
let cardTwo = null;

function flip(card){
    card.classList.add('flip');
    setTimeout(() => {
        card.classList.remove('card-back');
    }, 300);
}
function selectCard() {
    if (cardOne === null) {
        cardOne = this;
        flip(cardOne);
    }
    else if (cardTwo === null) {
        cardTwo = this;
        flip(cardTwo);
    }
    compareCards();
}

function compareCards(){
    if (cardOne !== null && cardTwo !== null) {
        if (cardOne.dataset.character === cardTwo.dataset.character) {
            console.log('match');
            cardOne = null;
            cardTwo = null;
        }
        else {
            console.log('no match');
            setTimeout(() => {
                cardOne.classList.add('card-back');
                cardTwo.classList.add('card-back');
                cardOne = null;
                cardTwo = null;
            }, 500);
        }
    }     
}

let characters = ['hulk', 'superman', 'wonder-woman', 'spiderman', 'wolverine'];
characters = characters.concat(characters);
characters.sort(function() { return Math.random() - 0.5 });

characters.forEach( function (character){
    createCard(character);
});

function createCard(character){
    const card = document.createElement('div');
    card.classList.add('card', character, 'card-back' );
    document.body.append(card);
    card.addEventListener('click', selectCard);
    card.dataset.character = character;
}


