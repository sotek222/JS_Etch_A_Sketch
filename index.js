// document.addEventListener("DOMContentLoaded", () => {

let grid = 4;

  function createPad(grid){
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${grid}, auto)`;
    for(let i=0; i<(grid*grid); i++){
        const box = document.createElement("div");
        box.classList.add("grid-item");
        box.setAttribute("name", "block");
        container.appendChild(box);
    }
  }
  createPad(grid);

  const gridBlock = document.querySelectorAll(".grid-item");

  function hoverChange(e){
    e.target.style.opacity = 0.1;
    e.target.style.backgroundColor = "rgb(0,0,0)";
  }

  function opacIncr(e){
    if(e.target.style.opacity < 1.0 && e.target.style.opacity === 0.1){
      console.log("hello");
      e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
    }
  }

  for(let i=0;i<gridBlock.length;i++){
    gridBlock[i].addEventListener('mouseover', hoverChange);
  }
// gridBlock[i].addEventListener('mouseover', opacIncr);

// })
