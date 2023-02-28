const gridContainer = document.querySelector(".grid-container");

function createGrid(rows, cols) {
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols", cols);

    for (let i = 1; i <= (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("value", i);
        cell.addEventListener("mouseenter", colorCell);
        gridContainer.appendChild(cell);
    };
};

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
}

function selectGridSize() {
    let sizeInput = prompt("To create a new grid, please enter the number of cells you wish to see on one side of the grid. (max: 100)", "");
    
    if (sizeInput > 100) {
        alert("Error: Cannot input a number greater than 100.");
    } else {
        removeGrid(gridContainer);
        createGrid(sizeInput, sizeInput);

        // --- OTHER OPTION FOR INCLUDING THE MOUSEENTER LISTENER ---
        
        // const cellDivAll = document.querySelectorAll("div.cell");
        // cellDivAll.forEach((cellDiv) => {
        //     cellDiv.addEventListener("mouseenter", colorCell);
        // });
    }
}

const gridSizeBtn = document.querySelector(".grid-size-prompt");
gridSizeBtn.addEventListener("click", selectGridSize);

function colorCell(e) {
    e.target.style.backgroundColor = "black";
}