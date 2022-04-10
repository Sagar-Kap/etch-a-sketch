let gridInitial = document.querySelector(".grid");
let value = 16;


function promptValue() {  
  do{
      value = parseInt(window.prompt("Please enter a number from 1 to 100", value)); 
  }while(isNaN(value) || value>100 || value <1);
  return value;
}


function createGrid () {
let j = value*value;
for (let i=1; i<=j; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    gridInitial.appendChild(newDiv);
}

gridInitial.style.setProperty('--numOfBoxes', value);

document.querySelectorAll(".newDiv").forEach(item=>{
    item.addEventListener("mouseenter", function(e){
    e.target.style.backgroundColor = "purple";
    })
})
}

promptValue();
createGrid();


document.querySelector(".clear").addEventListener("click", e=>{
    gridInitial.remove();
    gridInitial = document.createElement("div");
    gridInitial.classList.add("grid");
    document.querySelector(".container").appendChild(gridInitial);
    promptValue()
    createGrid();
    
});