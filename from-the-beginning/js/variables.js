export const column1 = [];
export const column2 = [];
export const column3 = [];
export const column4 = [];
export const column5 = [];
export const column6 = [];
export const column7 = [];

export const player1 = 'red';
export const player2 = 'yellow';

export let turn = player1;


export function setTurn(value){
    turn = value;
}
export function getTurn(){
    return turn;
}