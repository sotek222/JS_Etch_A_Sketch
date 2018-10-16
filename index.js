document.addEventListener("DOMContentLoaded", () => {

let grid = prompt("Choose a Number between 2 and 64", 16);

  function createPad(grid){
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${grid}, auto)`;
    for(let i=0; i<(grid*grid); i++){
        const box = document.createElement("div");
        box.classList.add("grid-item");
        container.appendChild(box);
    }
  }
  createPad(grid);

  const gridBlock = Array.from(document.querySelectorAll(".grid-item"));


  function hoverChange(e){
    console.log(e.target.style)
    if(e.target.style.opacity == ""){
      e.target.style.opacity = 0.1
    } else if(e.target.style.opacity < 1){
      e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
    }
  }

  for(let i=0;i<gridBlock.length;i++){
    // gridBlock[i].setAttribute('id', `${i}`);
    gridBlock[i].addEventListener('mouseover', hoverChange);
  }
})
