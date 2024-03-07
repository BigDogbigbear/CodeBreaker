window.onload = function () {
	document.getElementById("input").readOnly = true;
	setGame();
}

function setGame(){
		let startGame = document.getElementById("button");
		startGame.addEventListener("click", fillArray);
}

let generatedArray = [];
let userInput = [];
let checkIfTrue = [];


function fillArray(){
	let inputVal = document.getElementById("input").value;
	resetInput("input");
	generatedArray = [];
	let difficulty = getDifficulty();
	console.log(difficulty);
	if (isNaN(difficulty)){
		return;
	}
	createDivs(difficulty);
	let digits = document.getElementById("digits");
	digits.innerHTML = difficulty;
	while (generatedArray.length < difficulty){
		let randomNumber = Math.ceil(Math.random()*9);
		if (generatedArray.includes(randomNumber)){
		}
		else {
			generatedArray.push(randomNumber);
		}
	}
	document.getElementById("input").readOnly = false;
}
function playGame(){
	let inputVal = document.getElementById("input").value;
	resetInput("input");
	userInput = inputVal.split('');
	for (let o = 0; o < userInput.length; o++){
		if (userInput[o] == generatedArray[o]){
			checkIfTrue[o] = generatedArray[o];
			let index = generatedArray.indexOf(generatedArray[o])
			let digitsw = document.getElementById(index);
			digitsw.innerHTML = generatedArray[o];
		}
	}
	console.log(userInput)
	let arraysAreEqual = generatedArray.length === userInput.length && generatedArray.every((value, index) => value === parseInt(userInput[index]));
	if (arraysAreEqual){
		document.getElementById("input").readOnly = true;
		document.getElementById("input").value = "Congrats, You won!";
	}
	return false;
}


function getDifficulty(){
	let difficulty;
	while(difficulty > 9 || difficulty < 0 || isNaN(difficulty)) {
		difficulty = prompt("Choose a number between 1 and 9\nThat's how many digits your code will have!\nType 'cancel' to cancel the process");
		try{
		if (difficulty == "cancel"){
			break;
		}
		if (difficulty > 9 || difficulty < 0){
			alert("Choose a different number!");
		}
		if (isNaN(difficulty)){
			alert("not a number!");
		}
		}
		catch(err){
			alert(`Error: ${err}`)
		}
	}
	return difficulty;
}

function createDivs(difficulty) {
	const myNode = document.getElementById("score");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.lastChild);
	}
	for (let o = 0; o < difficulty; o++){
		let tile = document.createElement("div");
		tile.id = o.toString();
		document.getElementById("score").appendChild(tile);
	}
}

function getInputValue() {
        let inputVal = document.getElementById("input").value;
		console.log(inputVal);
		resetInput("input");
		return InputVal;
}
	
function resetInput(id) {
	document.getElementById(id).value = '';
}
