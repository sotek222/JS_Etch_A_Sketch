document.addEventListener("DOMContentLoaded", () => {

let grid = 16;

  function createPad(grid){
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${grid}, auto)`;
    for(let i=0; i<(grid*grid); i++){
        const box = document.createElement("div");
        box.classList.add("grid-item");
        box.textContent = "O";
        container.appendChild(box);
    }
  }
  createPad(grid);
})
