
/*
---DATATABLE VISUALIZATION---
		   A B C D
		   E F G H
		   I J K L
		   M N O P 
*/

const dataTable = {
	"A" : ["B", "E"],
	"B" : ["A", "C", "F"],
	"C" : ["B", "D", "G"],
	"D" : ["C", "H"],
	"E" : ["F", "I", "A"],
	"F" : ["B", "E", "G", "J"],
	"G" : ["C", "F", "H", "K"],
	"H" : ["D", "G", "L"],
	"I" : ["E", "J", "M"],
	"J" : ["F", "I", "K", "N"],
	"K" : ["G", "J", "L", "O"],
	"L" : ["H", "K", "P"],
	"M" : ["I", "N"],
	"N" : ["J", "M", "O"],
	"O" : ["K", "N", "P"],
	"P" : ["L", "O"]
}

const completedPuzzle = {
	"A" : "1",
	"B" : "2",
	"C" : "3",
	"D" : "black",
	"E" : "5",
	"F" : "6",
	"G" : "7",
	"H" : "8",
	"I" : "9",
	"J" : "10",
	"K" : "11",
	"L" : "12",
	"M" : "13",
	"N" : "14",
	"O" : "15",
	"P" : "16"
}



//The game
function slide(clickedImage) {
	dataTable[clickedImage.id].forEach(function(id) {
	  	if(document.getElementById(id).src.endsWith("black.jpeg")) {
			document.getElementById(id).src = clickedImage.src;
			clickedImage.src = "images/black.jpeg";
		}
	});
}



//Reset button
let reset = () => {
	//location.reload(); //This works, but it is bad practice.
	for(let id in completedPuzzle) {
		document.getElementById(id).src = "images/" + completedPuzzle[id] + ".jpeg";
	}
}
document.getElementById("reset").addEventListener('click', reset);

// Shuffle button
let shuffle = () => {

	let images = document.getElementsByClassName("image");
	for(let i=0; i<images.length; i++) {
		if(images[i].src.endsWith("black.jpeg")) {
			let black = images[i],
				neighbors = dataTable[black.id],
				randomNum = Math.floor(Math.random()*neighbors.length),
				theChosenOne = neighbors[randomNum];

			black.src = document.getElementById(theChosenOne).src;
			document.getElementById(theChosenOne).src = "images/black.jpeg";

			//TEST - reusable
			// console.log(`
			// 	black.src: ${black.src}
			// `);
		}
	}
}
document.getElementById("shuffle").addEventListener('click', shuffle);