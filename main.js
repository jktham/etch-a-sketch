let size = 16;
let mouseDown = false;
let body = document.querySelector("body");
let gridContainer = document.querySelector("#grid-container");
let resetButton = document.querySelector("#button-reset");
let sizeInput = document.querySelector("#input-size");

window.addEventListener("mousedown", () => {mouseDown = true});
window.addEventListener("mouseup", () => {mouseDown = false});
resetButton.addEventListener("click", () => {createGrid(size)});


createGrid(size);

function createGrid() {
    size = sizeInput.value;
    if (gridContainer) {
        gridContainer.remove();
    }
    gridContainer = document.createElement("div");
    gridContainer.id = "grid-container";
    body.prepend(gridContainer);

    for (let i=0; i<size; i++) {
        let gridRow = document.createElement("div");
        for (let j=0; j<size; j++) {
            let gridCell = document.createElement("div");
            gridRow.appendChild(gridCell);
            gridCell.addEventListener("mousedown", paintCell);
            gridCell.addEventListener("mouseover", paintCell);
        }
        gridContainer.appendChild(gridRow);
    }
}

function paintCell(e) {
    if (mouseDown == true || e.type == "mousedown") {
        e.target.style.backgroundColor = "#ff0000";
    }
}