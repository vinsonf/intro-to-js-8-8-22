import {Card} from './card.js';

export class Deck {
    constructor() {
        this.cards = [];
        const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
        const values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        suits.forEach(suit => {
            values.forEach(value => {
                this.cards.push(new Card(value, suit));
            });
        })
    }
    
    addCard(card) {
        this.cards.push(card);
    }
    
    removeCard() {
        return this.cards.pop();
    }
    
    shuffle() {
        let counter = this.cards.length;
    
        while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
    
        counter--;
    
        let temp = this.cards[counter];
        this.cards[counter] = this.cards[index];
        this.cards[index] = temp;
        }
    }
}