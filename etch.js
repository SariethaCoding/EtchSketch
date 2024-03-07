function createGrid(squares) {

console.log("Creating grid.... number of squares is : " + squares);

if (squares == null) {
    squares = 16;
}

console.log("squares are now : " + squares);
// Clean the previous grid!
document.getElementById("grid").textContent = "";


// Create a grid of squares...
for(let i = 0; i < squares; i++) {
    const newRowDiv = document.createElement("div");
    newRowDiv.classList.add("row");
    newRowDiv.id = ("row"+i);
    document.getElementById("grid").appendChild(newRowDiv);
    // set the height depending on number of squares
    document.getElementById("row"+i).style.height = (100/squares+"%");

    for(let j = 0; j < squares; j++) {
        const newDivBlock = document.createElement("div");
        newDivBlock.classList.add("square");

        // add eventListener to create a colour effect with mouseOver
        newDivBlock.addEventListener("mouseover", function (e) {
            //console.log(e);
            e.target.style.background = 'white';
        });
        
        document.getElementById("row"+i).appendChild(newDivBlock);
    }
}

}

function getNumberOfSquares() {
    console.log("get the number of squares");

    let squares = prompt("Please enter number of squares you want per row for the new grid : ");

    // Put in check to make sure it's a valid number......

    if (squares == null || squares == "") {
        console.log("Didn't enter anything")
    } 
    else if (squares > 100) {
        squares = prompt("Please enter a number smaller than 100")
    }
    else {
        createGrid(squares);
    }
    
}