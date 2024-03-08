// Set drawing colour default to black:
let drawColour = "#000000" ;

// Set pen to not drawing as default
let penActive = false;

// Initialize default grid on pageload
createGrid();


//Eventlistener to toggle pen on/off
const gridBlock = document.getElementById("grid");
const penActiveIcon = document.getElementById("drawing");
gridBlock.addEventListener("click", function (e) {
    if (penActive) {
        penActive = false;
        penActiveIcon.style.opacity = "10%";
    }
    else {
        penActive = true;
        penActiveIcon.style.opacity = "100%";
    }

    console.log ("Pen has been toggled to : " + penActive);
   
});

/* ------------------------------------------------------*/

function changeColour(newColour) {
    drawColour = newColour;
    console.log("Colour is : " + drawColour);
}


function createGrid() {
// Clean the previous grid!
document.getElementById("grid").textContent = "";

let squares = document.getElementById("gridSizeSlider").value;
   
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
