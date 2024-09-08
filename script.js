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
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator === "+") {
    screen.textContent = add(num1, num2);
  } else if (operator === "-") {
    screen.textContent = subtract(num1, num2);
  } else if (operator === "*") {
    screen.textContent = multiply(num1, num2);
  } else if (operator === "/") {
    screen.textContent = divide(num1, num2);
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
numberButtons.forEach(button => {
  button.addEventListener("click", e => {
    //check if the operator has been filled to determine whether it goes to 1 or 2
    if (operator === "" && number1.length < 9) {
      equalButton.classList.remove("selected");
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

// event listener that gets the operator when appropriate
const operatorButtons = document.querySelectorAll(".operator.button");
operatorButtons.forEach(button => {
  button.addEventListener("click", e => {
    if (number1 !== ""){
      operatorButtons.forEach(button => button.classList.remove("selected"));
      equalButton.classList.remove("selected");
      e.target.classList.add("selected");
      if (number2 === "") {
        operator = e.target.textContent;
        console.log(operator);
      } else {
        operate (number1, operator, number2)
        number1 = screen.textContent;
        number2 = "";
        operator = e.target.textContent;
        console.log(operator);
      }
    }
  })
})

// event listener that processes the equal button then resets all data
const equalButton = document.querySelector(".equal.button");
equalButton.addEventListener("click", e => {
  if (number1 !== "") {
    operatorButtons.forEach(button => button.classList.remove("selected"));
    equalButton.classList.add("selected");
    if (number2 === "") {
      screen.textContent = number1;
    } else {
      operate (number1, operator, number2);
    }
    number1 = "";
    number2 = "";
    operator = "";
  }
})

