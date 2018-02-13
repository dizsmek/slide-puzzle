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

// let images = document.getElementsByTagName('IMG');
// let black = function () {
// 	for (let index = 0; index < images.length; index++) {
// 		if(images[index].src.endsWith("black.jpeg")) {
// 			return images[index].id;
// 		}
// 	}
// };
//
// console.log(black());
//
// function slide(event) {
// 	event = event || window.event;
// console.log(event.target.id); //event.target is not working in Firefox
//
// 	for (let key in dataTable) {
// 		if (event.target.id === key) {
// 			for(let i = 0; i < dataTable[key].length; i++) {
// 				if(dataTable[key][i] === black()) {
// 					console.log('test');
// 				}
// 			}
// 		}
// 	}
// }

function slide(clickedImage) {
	console.log(clickedImage);
	dataTable[clickedImage.id].forEach(function(id) {
  	console.log(id);
	});
}
