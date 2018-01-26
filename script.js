let mainSquare = document.getElementById("main-square");
let square = document.getElementsByClassName("square");

for(let i=0; i<square.length; i++){
	square[i].addEventListener("click", function(){
		mainSquare.style.backgroundColor = window.getComputedStyle(this).getPropertyValue("background-color");
	});
}
