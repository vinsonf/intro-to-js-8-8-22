export class Player {
    points = 0;
    hand = [];
    constructor(name) {
        this.name = name;
    }
    addCard(card) {
        this.hand.push(card);
    }
}