import { 
    column1, 
    column2, 
    column3,
    column4,
    column5,
    column6,
    column7,
    player1,
    player2,

} from "./variables.js";

export function createPiece(color, columnRow) {
    const piece = document.createElement('div');
    columnRow.appendChild(piece);
    console.log(columnRow);
    piece.classList.add('piece');
    piece.classList.add(color);
    columnRow.classList.add('full');
    columnRow.classList.add(color);
    checkForWin();
}


function checkForWin(){
   
    checkVerticalForBothPlayers(column1);
    checkVerticalForBothPlayers(column2);
    checkVerticalForBothPlayers(column3);
    checkVerticalForBothPlayers(column4);
    checkVerticalForBothPlayers(column5);
    checkVerticalForBothPlayers(column6);
    checkVerticalForBothPlayers(column7);
}

function checkWinVertical(columnArray, index, player){
    if(columnArray.slice(index,index+4).every(el => el.classList.contains(player))) {
        alert(player + ' wins');
    }
}

function checkVerticalForBothPlayers(column) {
    checkWinVertical(column, 0, player1);
    checkWinVertical(column, 1, player1);
    checkWinVertical(column, 2, player1);
    checkWinVertical(column, 0, player2);
    checkWinVertical(column, 1, player2);
    checkWinVertical(column, 2, player2);
}
