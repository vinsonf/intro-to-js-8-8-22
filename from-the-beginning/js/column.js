import { createColumnRowElement } from "./columnRow.js";


export function createColumnElement(i){
    const column = document.createElement('div');
    document.body.appendChild(column);
    column.classList.add('column');
    column.classList.add('column-' + i);
    for(let i = 0; i < 6; i++){
        createColumnRowElement(column, i);
    }
}
