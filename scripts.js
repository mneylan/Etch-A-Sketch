const container = document.querySelector('#container');
/*const grid = document.createElement('div');*/



function createGrid() {
    let gridSize = 16
for (let i = 0; i < gridSize * gridSize; i++) {
    let grid = document.createElement('div');
    
    grid.classList.add('grid');
    container.appendChild(grid);
    
}
}

function mouseEnterEventListener() {
    let etchASketchSquare = document.querySelectorAll('.grid')
    etchASketchSquare.forEach(item => item.addEventListener('mouseenter', fillBox))
}


function fillBox() {
    this.style.backgroundColor = "black";
}

function clearGrid() {
    let grids = document.querySelectorAll('.grid')
    grids.forEach(item => item.remove());
    createGrid();
    mouseEnterEventListener();
    
    
    /*let allSquares = document.querySelectorAll('.grid')
    allSquares.forEach(item => item.style.backgroundColor = "grey")*/
}
function clearGrid2() {
    let grids = document.querySelectorAll('.grid')
    grids.forEach(item => item.remove());
}

function newGrid() {
    clearGrid2()
    let size = prompt("Hello, Sean. Enter a number between 1 and 50.") 
    if (size > 50 || size < 1) {return alert("Not a valid number")}
    for (let i = 0; i < size * size; i++) {
    let grid = document.createElement('div');
    
    grid.classList.add('grid');
    grid.style.height = (400 / size) + 'px';
    grid.style.width = (400 / size) + 'px';
    container.appendChild(grid);
    mouseEnterEventListener()
}
}

createGrid()
mouseEnterEventListener()
