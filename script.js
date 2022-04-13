import {draw} from './board.js';
const board = document.querySelector('.game-board');

draw(parent = board);
//Guesss Array
let guess = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
]
// Parameters
let word = ['e','l','m','a','s'];
let cells = document.querySelectorAll('.cell');
let  row = 0;
let  col = 0;

document.body.addEventListener('keyup' , e => {
    if(col < 6){
        if( col <= 5){
            if(e.key == 'Backspace' && col != 0){
                    col--;
                    erase(row,col);
                    return
            }
            else if(isValid(e.key) && col < 5){
                guess[row][col] = e.key;
                write(row,col,e.key);
                col++;
                return
            }
        }
        if(col == 5 && e.key == 'Enter'){
            check(row);
            cells[5*row + col - 1].classList.remove('scale');
            col = 0;
            row++;
        }
    }
})

//Write on the board function
const write = (row,col,key) => {
    cells[5*row + col].textContent = key.toUpperCase();
    cells[5*row + col].classList.add('scale');
    if(col != 0 )  cells[5*row + col - 1].classList.remove('scale');
}

//Delete on the board function
const erase = (row,col) => {
    cells[5*row + col].textContent = '';
    console.log(cells[5*row + col].classList.contains('scale'));
    cells[5*row + col + 1].classList.remove('scale');
    if(col < 5) {
        cells[5*row + col].classList.add('scale');
        return
    };
}

//check the the key is valid
function isValid(key){
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return alphabet.includes(key.toUpperCase());
}

//Check and color the board
const check = (row) => {
    let word = ['e','l','m','a','s'];
    guess[row].forEach((letter,index) => {
        setTimeout(() => {
            cells[5*row + index].classList.add('flipAnimation');
        },300*index)
        if(letter  ==  word[index]){
            word.splice(index,1,'Green');
            cells[5*row + index].style.setProperty('background','green');
        }
        else if(word.includes(letter)){
            cells[5*row + index].style.setProperty('background','pink');
            word.splice(index,1,'Green');
        }
        else{
            cells[5*row + index].style.setProperty('background','#ddd');
        }
    })
}

