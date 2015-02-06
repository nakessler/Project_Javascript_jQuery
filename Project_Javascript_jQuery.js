// Sets up a function that produces a grid within the "container" <div>
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// Sets up a function that clears an existing grid
function clearGrid(){
    $(".grid").remove();
};  

// Sets up a function that prompts the user to select the number of boxes in a new grid
// This function then creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// Creates a 16x16 grid when the page loads
// Sets up a hover effect that changes the color of a square when the mouse passes over it, leaving a (pixelated) trail through the grid
// Enables the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});
