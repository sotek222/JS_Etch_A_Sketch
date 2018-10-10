// document.addEventListener("DOMContentLoaded", () => {

let grid = 16;

  function createPad(grid){
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${grid}, auto)`;
    for(let i=0; i<(grid*grid); i++){
        const box = document.createElement("div");
        box.classList.add("grid-item");
        box.setAttribute("name", "block");
        // box.textContent = "O";
        container.appendChild(box);
    }
  }
  createPad(grid);

  const gridBlock = document.querySelectorAll(".grid-item");

  function hoverChange(e){
    e.target.style.backgroundColor = "rgb(0,0,0)"
  };


  for(let i=0;i<gridBlock.length;i++){
    gridBlock[i].addEventListener('mouseover', hoverChange)
  }


// })
