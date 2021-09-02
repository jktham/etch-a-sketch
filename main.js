let gridContainer = document.querySelector("#grid-container");
let body = document.querySelector("body");

createGrid(64);

function createGrid(size) {
    if (gridContainer) {
        gridContainer.remove();
    }
    gridContainer = document.createElement("div");
    gridContainer.id = "grid-container";
    body.appendChild(gridContainer);

    for (let i=0; i<size; i++) {
        let gridRow = document.createElement("div");
        for (let j=0; j<size; j++) {
            let gridCell = document.createElement("div");
            gridCell.addEventListener("mouseover", paintCell);
            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}

function paintCell(e) {
    e.target.style.backgroundColor = "#ff0000";
}