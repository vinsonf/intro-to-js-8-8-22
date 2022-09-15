
import { column1 } from "./variables.js";
import { column2 } from "./variables.js";
import { column3 } from "./variables.js";
import { column4 } from "./variables.js";
import { column5 } from "./variables.js";
import { column6 } from "./variables.js";
import { column7 } from "./variables.js";
import { createPiece } from "./piece.js";
import { turn, player1, player2, setTurn } from "./variables.js";


export function createColumnRowElement(column, i){
    const columnRow = document.createElement('div');
    column.appendChild(columnRow);
    columnRow.classList.add('column-row');
    columnRow.innerText = i;
    columnRow.classList.add('row-' + i);


    if (column.classList.contains('column-0')){
        column1.push(columnRow);
    } 
    if (column.classList.contains('column-1')){
        column2.push(columnRow);
    }
    if (column.classList.contains('column-2')){
        column3.push(columnRow);
    }
    if (column.classList.contains('column-3')){
        column4.push(columnRow);
    }
    if (column.classList.contains('column-4')){
        column5.push(columnRow);
    }
    if (column.classList.contains('column-5')){
        column6.push(columnRow);
    }
    if (column.classList.contains('column-6')){
        column7.push(columnRow);
    }

    console.log(column1);

   



    if (i === 0){
        console.log('i', i);
        columnRow.addEventListener('click', function(){
            if (  !column.querySelector('.row-5').classList.contains('full')){
                createPiece(turn, column.querySelector('.row-5'));
            } else if (!column.querySelector('.row-4').classList.contains('full')){
                createPiece(turn, column.querySelector('.row-4'));
            } else if (!column.querySelector('.row-3').classList.contains('full')){
                createPiece(turn, column.querySelector('.row-3'));
            } else if (!column.querySelector('.row-2').classList.contains('full')){
                createPiece(turn, column.querySelector('.row-2'));
            } else if (!column.querySelector('.row-1').classList.contains('full')){
                createPiece(turn, column.querySelector('.row-1'));
            } else if (!column.querySelector('.row-0').classList.contains('full')){
                createPiece(turn, column.querySelector('.row-0'));
            } else {
                alert('column is full');
            }
        
          
           
            if (turn === player1){
                setTurn(player2);
            } else {
                setTurn(player1);
            }
        })
    }
}

