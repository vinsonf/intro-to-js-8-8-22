let cardOne = null;
let cardTwo = null;
let cardFlipping = false;
let que = null;

let characters = ['hulk', 'superman', 'wonder-woman', 'spiderman', 'wolverine'];
characters = characters.concat(characters);
characters.sort(function() { return Math.random() - 0.5 });

characters.forEach( function (character){
    createCard(character);
});

function createCard(character){
    const card = document.createElement('div');
    document.body.append(card);
    card.dataset.character = character;
    card.classList.add('card', 'down', 'start', character);
    card.innerHTML = `
    <div class="card-front">
    </div>
    <div class="card-back">
        Over Matched
    </div>
    `;
    card.addEventListener('click', () => {

        if (cardFlipping) {
            console.log('there is a card flipping already')
            return;
        }

        card.classList.remove('start');
        if (card.classList.contains('down')) {
            flipUp(card)
        } else {
            flipDown(card)
        }
    });
    card.addEventListener('animationend', (event) => {
        console.log(event.animationName)
        cardFlipping = false;
        if (event.animationName === 'flipup') {
            checkAfterFlip(card);
        }
        
    });
}

function flipUp(card){
    card.classList.remove('down');
    card.classList.add('up');
    cardFlipping = true;
}

function flipDown(card){
    card.classList.remove('up');
    card.classList.add('down');
    cardFlipping = true;
}

function checkAfterFlip(
    card
) {
    if (cardOne === null) {
        cardOne = card;
    }
    else if (cardTwo === null) {
        cardTwo = card;
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
           
            flipDown(cardOne);
            flipDown(cardTwo);
            cardOne = null;
            cardTwo = null;
            
        }
    }     
}



     