let size = 16;
let color = "#000000"
let mode = "color";
let mouseDown = false;
let body = document.querySelector("body");
let containerGrid = document.querySelector("#grid-container");
let buttonReset = document.querySelector("#button-reset");
let inputSize = document.querySelector("#input-size");
let spanSize = document.querySelector("#span-size");
let inputColor = document.querySelector("#input-color");
let selectMode = document.querySelector("#select-mode");

window.addEventListener("mousedown", () => {mouseDown = true});
window.addEventListener("mouseup", () => {mouseDown = false});
buttonReset.addEventListener("click", () => {createGrid(size)});

createGrid();

inputSize.oninput = function() {
    spanSize.textContent = this.value;
    size = this.value;
}

inputSize.onchange = function() {
    createGrid();
}

inputColor.oninput = function() {
    color = this.value;
}

selectMode.oninput = function() {
    mode = this.value;
}

function createGrid() {
    if (containerGrid) {
        containerGrid.remove();
    }
    containerGrid = document.createElement("div");
    containerGrid.id = "grid-container";
    body.prepend(containerGrid);

    for (let i=0; i<size; i++) {
        let gridRow = document.createElement("div");
        for (let j=0; j<size; j++) {
            let gridCell = document.createElement("div");
            gridRow.appendChild(gridCell);
            gridCell.addEventListener("mousedown", paintCell);
            gridCell.addEventListener("mouseover", paintCell);
        }
        containerGrid.appendChild(gridRow);
    }
}

function paintCell(e) {
    if (mouseDown == true || e.type == "mousedown") {
        switch(mode) {
            case "color":
                e.target.style.backgroundColor = color;
                break;
            case "rainbow":
                e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                break;
            case "shade":
                if (!e.target.style.backgroundColor) {
                    e.target.style.backgroundColor = "rgb(255, 255, 255)";
                }
                let old = e.target.style.backgroundColor.replace(/[^\d,]/g, '').split(',');
                e.target.style.backgroundColor = `rgb(${old[0]-20}, ${old[1]-20}, ${old[2]-20})`;
                break;
            case "erase":
                e.target.style.backgroundColor = "#FFFFFF";
                break;
            
        }
    }
}