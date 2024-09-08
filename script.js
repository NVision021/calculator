//Functions for each operator
const add = function(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2) {
  return num1 - num2;
}

const multiply = function(num1, num2) {
  return num1 * num2;
}

const divide = function(num1, num2) {
  return num1 / num2;
}

//Function to determine which operator function to use
const operate = function(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

//Variable for each of the three components of a sum
let number1 = "";
let number2 = "";
let operator = "";

//create a reference to the calculator screen
const screen = document.querySelector("#screen");

//add event listeners to number buttons and display the appropriate one on screen
const numberButtons = document.querySelectorAll(".button.number");
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //check if the operator has been filled to determine whether it goes to 1 or 2
    if (operator === "" && number1.length < 9) {
      number1 += e.target.textContent;
      console.log(number1);
      screen.textContent = number1;
    } else if (operator !== "" && number2.length < 9) {
      number2 += e.target.textContent;
      console.log(number2);
      screen.textContent = number2;
    }
  });
});

// function that gets the operator

// function that gets the "=" input and runs the sum if all the required items are present


