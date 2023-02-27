function createGrid(rows, cols) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols", cols);

    for (let i = 1; i <= (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("value", i);
        gridContainer.appendChild(cell);
    };
};

function colorCell(e) {
    e.currentTarget.style.cssText = `
    background-color: black;`;
}

createGrid(16, 16);

let cellDiv = document.querySelector(".cell");

let cellDivAll = document.querySelectorAll(".cell");

cellDivAll.forEach((cellDiv) => {
    cellDiv.addEventListener("mouseover", colorCell);
});