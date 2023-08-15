import { calculate } from "./calculator.js";

// TODO: Faire la manipulation du DOM dans ce fichier

// Récupérer les éléments du DOM
const inputElement = document.getElementById('input');
const calculElement = document.getElementById('calcul');
const buttons = document.querySelectorAll('.numpad, #plusoumoins, #percentage');
const resetButton = document.getElementById('reset');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
// const doubleZeroButton = document.getElementById('double-zero');
const plus = document.getElementById ('plus');
const minus = document.getElementById ('minus');
const times = document.getElementById ('times');
const divideby = document.getElementById ('divideby');
// const operationButton = document.querySelectorAll('#plus', '#minus', '#times', '#divideby')

/*****************Désactiver l'entrée par le clavier pour Input**********/

inputElement.disabled = true;

/******************************Ajouter des écouteurs d'événements aux boutons****************************** */

buttons.forEach(button => {
  button.addEventListener('click', () => {
    addToInput(button.textContent);
  });
});

plus.addEventListener('click', (e) => {
  addToInput('+');
  e.preventDefault();
});  
minus.addEventListener('click', (e) => {
  addToInput('-');
  e.preventDefault();
}); 
times.addEventListener('click', (e) => {
  addToInput('*');
  e.preventDefault();
});
divideby.addEventListener('click', (e) => {
  addToInput('/');
  e.preventDefault();
});

resetButton.addEventListener('click', () => {
  resetCalculator();
});

clearButton.addEventListener('click', () => {
  clearInput();
});

equalsButton.addEventListener('click', (e) => {
  addToInput(calculateResult());
  e.preventDefault();
});

/****************************Fonctions*****************************************/

  // Fonction pour ajouter du texte à l'entrée
function addToInput(value) {

  if (inputElement.value === '0' && value !== '.') {
    inputElement.value = value;
  } else {
    inputElement.value += value;
  }
  // Mettre à jour la chaîne de calcul
  const currentCalculation = calculElement.textContent.trim();
  const updatedCalculation = currentCalculation + ' ' + value;
  calculElement.textContent = updatedCalculation;
}
/*********************************/

// Fonction pour réinitialiser la calculatrice
function resetCalculator() {
  inputElement.value = '';
  calculElement.textContent = '';
}

/*******************************/

// Fonction pour effacer l'entrée
function clearInput() {
  inputElement.value = '';
}



function calculateResult (result) {
  result.calculate(updatedCalculation)
}