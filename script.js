let container = document.querySelector('.container');
container.style.width = '500px';
let containerWidth = parseInt(container.style.width);
let sideQuantity = 16;
let gridSize = document.addEventListener('change', resizeGrid);

 function createGrid(sideQuantity) {
    let gridWidth = (containerWidth/sideQuantity)-4;
    let borderRadius = gridWidth*0.1;

    for (let i = sideQuantity**2; i > 0 ; i--) {
        let grid = document.createElement('div');
        grid.className = 'grid-element';
        grid.style.cssText = `width: ${gridWidth}px; border-radius: ${borderRadius}px`;
        container.appendChild(grid);
    }
}

createGrid(sideQuantity);


function resizeGrid(e) {
    console.log(e.target.value);
    sideQuantity = e.target.value;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    let gridWidth = (containerWidth/sideQuantity)-4;
    let borderRadius = gridWidth*0.1;

    for (let i = sideQuantity**2; i > 0 ; i--) {
        let grid = document.createElement('div');
        grid.className = 'grid-element';
        grid.style.cssText = `width: ${gridWidth}px; border-radius: ${borderRadius}px`;
        container.appendChild(grid);
    }
}