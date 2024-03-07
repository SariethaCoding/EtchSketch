// Create a grid of 16 x 16 squares...
for(let i = 0; i < 16; i++) {
    const newRowDiv = document.createElement("div");
    newRowDiv.classList.add("row");
    newRowDiv.id = ("row"+i);
    document.getElementById("grid").appendChild(newRowDiv);

    for(let j = 0; j < 16; j++) {
        const newDivBlock = document.createElement("div");
        newDivBlock.classList.add("square");
        document.getElementById("row"+i).appendChild(newDivBlock);
    }
}
