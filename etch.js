// Set drawing colour default to black:
let drawColour = "#000000" ;

// Set pen to not drawing as default
let penActive = false;

// Random colours when drawing - set to false as default
let rainbowMode = false;

// Darkens colours when drawing - set to false as default
let shadingMode = false;

// Initialize default grid on pageload
createGrid();

// constant array for random colour generator (hex values)
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


/* ------------------------------------------------------*/

//Eventlistener to toggle pen on/off
const gridBlock = document.getElementById("grid");
const penActiveIcon = document.getElementById("drawing");
gridBlock.addEventListener("click", function (e) {
    if (penActive) {
        penActive = false;
        penActiveIcon.style.opacity = "10%";
        penActiveIcon.innerHTML = "DRAWING OFF";
    }
    else {
        penActive = true;
        penActiveIcon.style.opacity = "100%";
        penActiveIcon.innerHTML = "DRAWING ON";
    }

    // console.log ("Pen has been toggled to : " + penActive);
   
});

/* ------------------------------------------------------*/

function darkenColour(currentBlock, currentColour) {
    let theFilter = currentBlock.style.filter;
    //console.log("Darkening colour : " + currentColour + " with current filter : " + theFilter);
    if(currentColour != ""){

        switch(theFilter) {
            case "brightness(100%)" :
                currentBlock.style.filter = "brightness(90%)";
                break;
            case "brightness(90%)" :    
                currentBlock.style.filter = "brightness(80%)";
                break;
            case "brightness(80%)" :    
                currentBlock.style.filter = "brightness(70%)";
                break;
            case "brightness(70%)" :    
                currentBlock.style.filter = "brightness(60%)";
                break;
            case "brightness(60%)" :    
                currentBlock.style.filter = "brightness(50%)";
                break;
            case "brightness(50%)" :    
                currentBlock.style.filter = "brightness(40%)";
                break;
            case "brightness(40%)" :    
                currentBlock.style.filter = "brightness(30%)";
                break;
            case "brightness(30%)" :    
                currentBlock.style.filter = "brightness(20%)";
                break;
            case "brightness(20%)" :    
                currentBlock.style.filter = "brightness(10%)";
                break;
            case "brightness(10%)" :    
                currentBlock.style.filter = "brightness(0%)";
                break;
            default :    
                break;
        }
    }
    
}


function generateRandomColour() {
    let rainbowColour = "";
    for(let i=0; i<6; i++){
        rainbowColour += hexArray[Math.floor(Math.random()*16)];
    }

    rainbowColour = "#"+rainbowColour;
    drawColour = rainbowColour;

    /* can remove this line that changes the colour picker to reflect the current drawing colour
       if it is too distracting to see all the colours flash by... */
    document.getElementById("drawColour").value = drawColour;

 
}

/* Toggle Rainbow mode - generates random colours for each block when drawing */
function makeItRainbow() {

    // If shading mode is still active - disable it
    if(shadingMode){
        createShading();
    }

    rainbowMode = !rainbowMode;
    document.getElementById("rainbowButton").classList.toggle("buttonOn");

}


// Toggle Shading mode - Make the colour of the block darker by 10%
function createShading() {

    // If Rainbow mode was still active - disable it
    if(rainbowMode){
        makeItRainbow();
    }

    shadingMode = !shadingMode;
    document.getElementById("shadingButton").classList.toggle("buttonOn");
 
}


function changeColour(newColour) {
    drawColour = newColour;
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
                if(shadingMode) {
                    darkenColour(e.target,this.style.background);
                }
                else {
                    // (Re)set the shading on square to full brightness
                    e.target.style.background = drawColour;
                    e.target.style.filter = "brightness(100%)";
                    
                }    
            }
        });
        
        document.getElementById("row"+i).appendChild(newDivBlock);
    }
}

}



function helpPopUp() {
    const popup = document.getElementById("helpPop");
    popup.classList.toggle("show");
}
