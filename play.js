let gridInitial = document.querySelector(".grid");
let j = 16*16;

function createGrid () {
for (let i=1; i<=j; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    gridInitial.appendChild(newDiv);
}  
document.querySelectorAll(".newDiv").forEach(item=>{
    item.addEventListener("mouseenter", function(e){
    e.target.style.backgroundColor = "purple";
    })
})
}

createGrid();

document.querySelector(".clear").addEventListener("click", e=>{
    gridInitial.remove();
    gridInitial = document.createElement("div");
    gridInitial.classList.add("grid");
    document.querySelector(".clear").before(gridInitial);
    createGrid();
    
});