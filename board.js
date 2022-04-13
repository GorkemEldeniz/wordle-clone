//Draw the board
function draw(parent,row = 6 ,col = 5){
    for(let i = 0 ; i < row ; i++ ){
        for(let j = 0; j < col ; j++ ){
            let cell = document.createElement('div');
            cell.setAttribute('data',`${i}-${j}`);
            cell.classList.add('cell');
            parent.appendChild(cell);
        }
    }
    // document.querySelectorAll('.cell').forEach((el,index) =>{
    //     let front = document.createElement('span');
    //     front.classList.add('front');
    //     front.setAttribute('position',`${index}`)
    //     let back = document.createElement('span');
    //     back.classList.add('back');
    //     back.setAttribute('position',`${index}`)
    //     el.appendChild(front);
    //     el.appendChild(back);
    // })
}


export {
    draw
}