var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reStart = document.querySelector("#reStart");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for (i = 0; i < squares.length; i++){
	//add click listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			reStart.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random colors
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	reStart.textContent = "New Colors";
	//change colors
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
		// add initil colors to squares
		h1.style.backgroundColor = "steelblue";
	}
	//restart function
	reStart.addEventListener("click", function(){
	// generate all new colors
		reset()
})


function changeColors(color){
	// loop through all squares
	for (i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	// make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	// return array
	return arr;
};

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return  "rgb(" + r + ", " + g + ", " + b + ")";
}