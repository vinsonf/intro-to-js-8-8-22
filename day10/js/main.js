import {Player} from './player.js';
import {Deck} from './deck.js';


let players = loadPlayers();
console.log(players);
players = players.map(function(item){
    console.log(item);
    if (!item) {
        return;
    }
    return new Player(item.name);
});

console.log('mapped', players)

let [player1, player2] = players;
console.log(player1, player2);

if (!players[0]){
    player1 = new Player(prompt('player1'));
    console.log(player1);
    savePlayers();
}
if (!players[1]){
    player2 = new Player(prompt('player2'));
    savePlayers();
}


const deck = new Deck();

deck.shuffle();

player1.addCard(deck.removeCard());
console.log(deck);
console.log(player1);
console.log(player2.name);

// Compare this snippet from day10/js/variables.js:

function savePlayers() {
    console.log(player1, player2)
    localStorage.setItem('player1', JSON.stringify(player1));
    localStorage.setItem('player2', JSON.stringify(player2));
}



function loadPlayers() {

    const tempPlayer1 = localStorage.getItem('player1');
    const tempPlayer2 = localStorage.getItem('player2');
    let player1;
    let player2;
    if (tempPlayer1 !== undefined) {
        console.log(tempPlayer1);
        player1 = JSON.parse(tempPlayer1);
    }
    if (tempPlayer2) {
        player2 = JSON.parse(tempPlayer2);
    }
    return [player1, player2];
};






