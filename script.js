let container = document.querySelector('.container');
container.style.width = '500px';
let containerWidth = parseInt(container.style.width);
let sideQuantity = 24;
let gridSize = document.addEventListener('change', resizeGrid);

 function createGrid(sideQuantity) {
    let gridWidth = (containerWidth/sideQuantity)-2; /* Create a variable for this formula */
    let borderRadius = gridWidth*0.05;

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
    
    let gridWidth = (containerWidth/sideQuantity)-2; /* Create a variable for this formula */
    let borderRadius = gridWidth*0.05;

    for (let i = sideQuantity**2; i > 0 ; i--) {
        let grid = document.createElement('div');
        grid.className = 'grid-element';
        grid.style.cssText = `width: ${gridWidth}px; border-radius: ${borderRadius}px`;
        container.appendChild(grid);
    }
}

let mouseHover = container.addEventListener('mouseover', paintBox)

function paintBox(e) {
    console.log(e)
    if (e.target.className === 'grid-element' && e.ctrlKey === false) {
        let selectedBox = e.target;
        selectedBox.style.backgroundColor = 'grey';
    }
        //let gridElement = document.getElementsByClassName('grid-element');
        //console.log(gridElement)
}

let resetButton = footer.querySelector('.reset-button')
    resetButton.addEventListener('click', () => {
        e.preventDefault();
        /* insert background for each grid box function */
    })