var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 2: numSquares = 6;
            // if(this.text.Content === "Easy"){
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }......code in line 25 is = codes commented out 26-30
            reset();
        });
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){  
        // a dd click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square 
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedcolor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    } 
}

function reset(){
    colors = generateRandomColors(numSquares);
    // pick a new random color from array 
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // change colors of squares 
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){  
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "teal";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
    // change each colo to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    // make an Array
    var arr = []
    // add num random colors to array
    for(var i = 0; i <= num; i++){
        arr.push(randomColor())
        // get random color and push into arr
    }
    // return that array
    return arr;
} 

function randomColor(){
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);

    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);

    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
