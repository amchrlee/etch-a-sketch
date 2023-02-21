function createGrid (rows, cols) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            gridContainer.appendChild(cell);
    };
};

createGrid(16, 16);