// DOM element selection
let mainSquare = document.getElementById("main-square");
let square = document.getElementsByClassName("square");

// Small colored square click event
for(let i=0; i<square.length; i++){
	square[i].addEventListener("click", function(){
		// Taking CSS property from small colored square to add it to big quare, window.getComputedStyle(this) is needed because of external css file.
		mainSquare.style.backgroundColor = window.getComputedStyle(this).getPropertyValue("background-color");
	});
}
