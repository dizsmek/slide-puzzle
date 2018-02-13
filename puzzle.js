/* A B C D
   E F G H
   I J K L
   M N O P */

const dataTable = {
	"A" : ["B", "E"],
	"B" : ["A", "C", "F"],
	"C" : ["B", "D", "G"],
	"D" : ["C", "H"],
	"E" : ["F", "I"],
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

function slide(clickedImage) {
console.log(clickedImage);
	dataTable[clickedImage.id].forEach(function(id) {
console.log(document.getElementById(id).src);
  	if(document.getElementById(id).src.endsWith("black.jpg")) {
			document.getElementById(id).src = clickedImage.src;
			clickedImage.src = "images/black.jpg";
		}
	});
}
