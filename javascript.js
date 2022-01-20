const grid = document.querySelector('.grid');


function createDivs(numOfDivs, parent, className){
    for (let i = 0; i < numOfDivs; i++){
        const div = document.createElement('div');
        div.classList.add(className);
        parent.appendChild(div);
    }
}

function createGrid(sideLength, parent){
    createDivs(sideLength, parent, 'column');
    const columns = document.querySelectorAll('.column');
    columns.forEach((column) => {
        createDivs(sideLength, column, 'box')
    });
}

function addGridListener(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', 'background-color: black');
        })
    });
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => {
    boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.setAttribute('style', 'background-color: white');
    })
});

const gridSizeButton = document.querySelector('.gridsize');
gridSizeButton.addEventListener('click', () => {
    let length = prompt('New grid size');
    while (length > 100){
        length = prompt('Number cannot be larger than 100!');
    }
    removeAllChildNodes(grid);
    createGrid(length, grid);
    addGridListener();
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createGrid(16,grid);
addGridListener();