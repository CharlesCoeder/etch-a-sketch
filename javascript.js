const grid = document.querySelector('.grid');


function create16Divs(parent, className){
    for (let i = 0; i < 16; i++){
        const div = document.createElement('div');
        div.classList.add(className);
        parent.appendChild(div);
    }
}

create16Divs(grid, 'column');


const columns = document.querySelectorAll('.column');

columns.forEach((column) => {
    create16Divs(column, 'box')
});

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.setAttribute('style', 'background-color: black');
    })
})

const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.setAttribute('style', 'background-color: white');
    })
})