// import { calculate } from "./calculator.js";

// TODO: Faire la manipulation du DOM dans ce fichier

/***********selectionner les elements************ */
const form = document.querySelector("form");
const buttons = form.querySelectorAll("button");
const inputElement = document.querySelector("#input");
const userInput = form.elements["userInput"];
const percentageSign = "%";
const minusSign = "-";
const equalsSign = "=";
const plusMinusSign = "+/-";
let result;

/***********conversion des symboles************ */
function cleanExpression(expression) {
  return expression
    .replace(/÷/g, "/")
    .replace(/×/g, "*")
    .replace(/x/g, "*")
    .replace(/X/g, "*")
    .replace(/\s/g, "")
    .replace(/%/g, " / 100");
}

/***********evaluer les expressions mathematiques*************/
function calculate(expression) {
  try {
    return eval(cleanExpression(expression));
  } catch (error) {
    form.reset();
    clearResult();
    inputElement.textContent = "";
    console.log(error);
  }
}

/***********les cliques du button egal*************/
function equalsClick(inputElement, userInput) {
  if (!result) {
    if (userInput.value) {
      inputElement.textContent = `${inputElement.textContent} ${userInput.value}`;
      result = calculate(inputElement.textContent);
      userInput.value = result;
    }
  } else {
    inputElement.textContent = result;
  }
}

/***********les cliques du button pourcentage*************/
function PercentageClick(userInput, inputElement) {
  if (userInput.value) {
    inputElement.textContent = `${inputElement.textContent} ${userInput.value} %`;
    result = userInput.value / 100;
    userInput.value = result;
  }
}