let container = document.querySelector('.container');
container.style.width = '500px';
let containerWidth = parseInt(container.style.width);
let sideQuantity = 24;
let sizeSelect = document.getElementById('gridNumber')
let gridSize = sizeSelect.addEventListener('change', resizeGrid);

    function createGrid(sideQuantity) {
        let gridWidth = (containerWidth / sideQuantity) - 2;
        let borderRadius = gridWidth * 0.05;
        
        for (let i = sideQuantity ** 2; i > 0; i--) {
            let grid = document.createElement('div');
            grid.className = 'grid-element';
            grid.style.cssText = `width: ${gridWidth}px; border-radius: ${borderRadius}px;`;
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
        let selectedBox = e.target;
        if (selectedBox.className === 'grid-element' && e.ctrlKey === false) {
            switch(true) {
                case (selectedMode === 'progressive-grey'):
                    progressiveGrey(selectedBox);
                    break;
                case (selectedMode === 'black&white'):
                    blackWhite(selectedBox);
                    break;
                case (selectedMode === 'rgb'):
                    rgb(selectedBox);
                    break;
            }
        }
    }

    function progressiveGrey(selectedBox) {
        if(selectedBox.id !=='paintedBox') {
            boxColor = 190;
            selectedBox.style.backgroundColor = `rgb(${boxColor},${boxColor},${boxColor}`;
        }
        else if (selectedBox.id === 'paintedBox' && parseInt(selectedBox.getAttribute('value'))>1) {
            boxColor = parseInt(selectedBox.getAttribute('value'));
            boxColor = boxColor-21;
            selectedBox.style.backgroundColor = `rgb(${boxColor},${boxColor},${boxColor}`;
        }
        selectedBox.setAttribute("id", "paintedBox");
        selectedBox.setAttribute("value", `${boxColor}`);    
    }

    function blackWhite(selectedBox) {
        selectedBox.style.backgroundColor = 'grey';
    }

    function rgb(selectedBox) {
        console.log('Random RGB Mode Selected');
    }

let resetButton = document.querySelector('#reset-grid')
resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearGrid();
    createGrid(sideQuantity);
});

let modeSelect = document.getElementById('paint-mode');
let selectedMode = 'progressive-grey';
let paintMode = modeSelect.addEventListener('change', (e) => {
        selectedMode = e.target.value;
    });