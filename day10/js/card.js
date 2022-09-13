import {colors} from "./variables.js";

export class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.display();
    }
    display() {
        const card = document.createElement('div');
        card.style.width = '100px';
        card.style.height = '150px';
        card.style.backgroundColor = colors[0];
        card.style.border = '1px solid black';
        card.style.borderRadius = '5px';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'space-between';
        card.style.padding = '5px';
        card.classList.add('card');
        card.innerHTML = `
            <div class="card__value">${this.value}</div>
            <div class="card__suit">${this.suit}</div>
        `;
        document.body.appendChild(card);
    }
}