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

/***********les cliques du minus*************/
function minusClick(userInput) {
  userInput.value = minusSign;
}

/***********les cliques des autres operateurs*************/
function otherOperatorsClick(operator, userInput, inputElement) {
  if (userInput.value) {
    const expression = result
      ? `${inputElement.textContent} ${operator}`
      : `${inputElement.textContent} ${userInput.value} ${operator}`;
    result = result && undefined;
    inputElement.textContent = expression;
    userInput.value = "";
  } else {
    if (operator === minusSign) {
      minusClick(userInput);
    }
  }
}

/***********les cliques du button reset*************/
function resetClick(form) {
  // inputElement.innerHTML = "";
  form.reset();
}

/***********les cliques des buttons*************/
function buttonClick(textContent, userInput) {
  if (textContent === plusMinusSign) {
    userInput.value = +userInput.value * -1;
  } else {
    userInput.value = `${userInput.value}${textContent}`;
  }
}

/***********initialisations*************/
inputElement.textContent = "";
userInput.value = "0";

/***********les cliques des buttons*************/
function submitClick(textContent) {
  if (textContent === equalsSign) {
    equalsClick(inputElement, userInput);
  } else if (textContent === percentageSign) {
    PercentageClick(userInput, inputElement);
  } else {
    otherOperatorsClick(textContent, userInput, inputElement);
  }
}

/**********ecouteur d'evenement aux buttons*************/
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    switch (this.type) {
      case "submit":
        submitClick(this.textContent);
        break;
      case "reset":
        resetClick(inputElement, form);
        break;
      case "button":
        buttonClick(this.textContent, userInput);
        break;
      default:
        break;
    }
  });
});

/**********ecouteur d'evenement  userInput*************/
userInput.addEventListener("input", function() {
  this.value = this.value.match(/[0-9.]*/)[0];
});

/**********ecouteur d'evenement  form(submit)*************/
form.addEventListener("submit", function(event) {
  event.preventDefault();
});

/**********ecouteur d'evenement  form (reset)*************/
form.addEventListener("reset", function() {
  clearResult();
});