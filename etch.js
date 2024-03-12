// Set drawing colour default to black:
let drawColour = "#000000" ;

// Set pen to not drawing as default
let penActive = false;

// Random colours when drawing - set to false as default
let rainbowMode = false;

// Initialize default grid on pageload
createGrid();

// constant array for random colour generator
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

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

function generateRandomColour() {
    let rainbowColour = "";
    for(let i=0; i<6; i++){
        rainbowColour += hexArray[Math.floor(Math.random()*16)];
    }

    rainbowColour = "#"+rainbowColour;
    console.log("Random colour : " + rainbowColour);
    drawColour = rainbowColour;

    /* can change the colour picker to reflect the current drawing colour
       might be a bit distracting tho... */
    document.getElementById("drawColour").value = drawColour;

 
}

/* Rainbow mode - generates random colours for each block when drawing */
function makeItRainbow() {
    rainbowMode = !rainbowMode;

    document.getElementById("rainbowButton").classList.toggle("buttonOn");


}

function changeColour(newColour) {
    drawColour = newColour;
    console.log("Colour is : " + drawColour);
}


function createGrid() {
// Clean the previous grid!
document.getElementById("grid").textContent = "";

let squares = document.getElementById("gridSizeSlider").value;

// Display the grid size on the page
document.getElementById("gridsize").textContent = squares + " X " + squares;

//  Determine block size 
let blockSize = 100/squares;
blockSize = blockSize.toFixed(2);

// Create a grid of squares...
for(let i = 0; i < squares; i++) {
    const newRowDiv = document.createElement("div");
    newRowDiv.classList.add("row");
    newRowDiv.id = ("row"+i);
    document.getElementById("grid").appendChild(newRowDiv);
    // set the height depending on number of squares
    document.getElementById("row"+i).style.height = (blockSize+"%");
    

    for(let j = 0; j < squares; j++) {
        const newDivBlock = document.createElement("div");
        newDivBlock.classList.add("square");
     
        // add eventListener to create a colour effect with mouseOver
        newDivBlock.addEventListener("mouseover", function (e) {
            if(penActive) {
                if(rainbowMode) {
                    generateRandomColour();
                }
                e.target.style.background = drawColour;
            }
        });
        
        document.getElementById("row"+i).appendChild(newDivBlock);
    }
}

}


function shadingMode() {
    
}


function helpPopUp() {
    const popup = document.getElementById("helpPop");
    popup.classList.toggle("show");
    
}
