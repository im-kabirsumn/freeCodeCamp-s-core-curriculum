const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", keyboardEventHandler);


function keyboardEventHandler (e) {
	if (e.key == "Enter") {
		checkUserInput();
	}
}
function checkUserInput () {
	var inputInt = parseInt(numberInput.value);

	if (!inputInt) {
		output.textContent = "Please enter a valid number";
		numberInput.value = "";
		return;
	}

	if (inputInt < 0) {
		output.textContent = "Please enter a number greater than or equal to 1";
		numberInput.value = "";
		return;
	}

	if (inputInt >= 4000) {
		output.textContent = "Please enter a number less than or equal to 3999";
		numberInput.value = "";
		return;
	}

	output.textContent = "";
	printRoman(inputInt);
	numberInput.value = "";
}


function printRoman (input) {
	if (input >= 1000) {
		output.textContent += "M";
		printRoman(input - 1000);
	} else if (input >= 900) {
		output.textContent += "CM";
		printRoman(input - 900);
	} else if (input >= 500) {
		output.textContent += "D";
		printRoman(input - 500);
	} else if (input >= 400) {
		output.textContent += "CD";
		printRoman(input - 400);
	} else if (input >= 100) {
		output.textContent += "C";
		printRoman(input - 100);
	} else if (input >= 90) {
		output.textContent += "XC";
		printRoman(input - 90);
	} else if (input >= 50) {
		output.textContent += "L";
		printRoman(input - 50);
	} else if (input >= 40) {
		output.textContent += "XL";
		printRoman(input - 40);
	} else if (input >= 10) {
		output.textContent += "X";
		printRoman(input - 10);
	} else if (input >= 9) {
		output.textContent += "IX";
		printRoman(input - 9);
	} else if (input >= 5) {
		output.textContent += "V";
		printRoman(input - 5);
	} else if (input >= 4) {
		output.textContent += "IV";
		printRoman(input - 4);
	} else if (input >= 1) {
		output.textContent += "I";
		printRoman(input - 1);
	} else if (input === 0) {
		return output.textContent;
	}
}

