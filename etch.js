// Set drawing colour :
let drawColour = "white";

// Set pen to not drawing as default
let penActive = false;

// Initialize default grid of size 20x20
createGrid(20);


//Eventlistener to toggle pen on/off
const gridBlock = document.getElementById("grid");
gridBlock.addEventListener("click", function (e) {
    if (penActive) {
        penActive = false;
    }
    else {penActive = true;}

    console.log ("Pen has been toggled to : " + penActive);
   
});

/* ------------------------------------------------------*/

function changeColour(newColour) {
    drawColour = newColour;
}


function createGrid(squares) {
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
            if(penActive) {
                e.target.style.background = drawColour;
            }
        });
        
        document.getElementById("row"+i).appendChild(newDivBlock);
    }
}

}



function getNumberOfSquares() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 100
    
    if (isNaN(x) || x < 1 ) {
        document.getElementById("textInfo").innerHTML = "Input not valid";
    }
    else if (x > 100) {
        document.getElementById("textInfo").innerHTML = "Grid can't exceed 100 squares per row";
    } 
    else {
        document.getElementById("textInfo").innerHTML = "New grid created (size "+x+" x "+x+")";
        createGrid(x);
    }
   
  
  }

