let container = document.querySelector('.container');
container.style.width = '500px';
let containerWidth = parseInt(container.style.width);
let sideQuantity = 6; /* parametrize this variable */
let gridSize = document.addEventListener('change', resizeGrid);

function createGrid(sideQuantity) {
    let gridWidth = (containerWidth / sideQuantity) - 2;
    let borderRadius = gridWidth * 0.05;

    for (let i = sideQuantity ** 2; i > 0; i--) {
        let grid = document.createElement('div');
        grid.className = 'grid-element';
        grid.style.cssText = `width: ${gridWidth}px; border-radius: ${borderRadius}px`;
        container.appendChild(grid);
    }
}

createGrid(sideQuantity);

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function resizeGrid(e) {
    sideQuantity = e.target.value;
    clearGrid();
    createGrid(sideQuantity);
}

let mouseHover = container.addEventListener('mouseover', paintBox)
function paintBox(e) {
    if (e.target.className === 'grid-element' && e.ctrlKey === false) {
        let selectedBox = e.target;
        let boxColor;
        if(selectedBox.id !=='paintedBox') {
            boxColor = 229;
            selectedBox.style.backgroundColor = `rgb(${boxColor},${boxColor},${boxColor}`;
        }
        
        if (selectedBox.id === 'paintedBox' && parseInt(selectedBox.getAttribute('value'))>0) {
            boxColor = parseInt(selectedBox.getAttribute('value'));
            boxColor = boxColor-25;
            console.log(boxColor);
            selectedBox.style.backgroundColor = `rgb(${boxColor},${boxColor},${boxColor}`;
        }
        selectedBox.setAttribute("id", "paintedBox");
        selectedBox.setAttribute("value", `${boxColor}`);
    }
}

let footer = document.querySelector('footer');
let resetButton = footer.querySelector('#reset-grid')
resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearGrid();
    createGrid(sideQuantity);
});