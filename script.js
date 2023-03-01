const gridContainer = document.querySelector(".grid-container");

function createGrid(rows, cols) {
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols", cols);
    gridContainer.style.border = "1px solid var(--white)";
    gridContainer.style.boxShadow = "0px 0px 20px 5px var(--white)";
    
    for (let i = 1; i <= (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("value", i);
        cell.addEventListener("mouseenter", colorCell);
        gridContainer.appendChild(cell);
    };
};

function colorCell(e) {
    let color = document.getElementById("colorpicker");
    e.target.style.backgroundColor = color.value;
}

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