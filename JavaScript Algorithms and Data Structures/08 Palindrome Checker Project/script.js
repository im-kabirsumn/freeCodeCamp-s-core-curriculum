const formElm = document.getElementById("form-elm");
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Event Listeners
formElm.addEventListener("submit", onSubmit);


function onSubmit (e) {
	e.preventDefault();
	showResultOnSubmit();
	this.reset();
}

function showResultOnSubmit () {
	let inputValue = getInputs();
	var value = getResult(inputValue);
	if (inputValue != "") {
		result.innerText = value;
	} else {
		alert("Please input a value");
	}
}

function getResult (inputValue) {
	let reversedValue = reverseInput();
	var cleanedString = cleanString(inputValue);
	var result;

	if (cleanedString === reversedValue) {
		result = `${inputValue} is a palindrome`;
	} else {
		result = `${inputValue} is not a palindrome`;
	}
	return result;
}

function getInputs () {
	let input = textInput.value;
	return input;
}

function reverseInput () {
	var inputValue = getInputs();
	return cleanString(inputValue).toLowerCase().split("").reverse().join("");
}

function cleanString (str) {
	return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").join("");
}


