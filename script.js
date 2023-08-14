import { calculate } from "./calculator.js";

// TODO: Faire la manipulation du DOM dans ce fichier

// Récupérer les éléments du DOM
const inputElement = document.getElementById('input');
const calculElement = document.getElementById('calcul');
const buttons = document.querySelectorAll('.numpad, #plusoumoins, #percentage');
const resetButton = document.getElementById('reset');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const doubleZeroButton = document.getElementById('double-zero');
const plus = document.getElementById ('plus');
const minus = document.getElementById ('minus');
const times = document.getElementById ('times');
const divideby = document.getElementById ('divideby');


// Ajouter des écouteurs d'événements aux boutons
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

equalsButton.addEventListener('click', () => {
  calculateResult();
});

doubleZeroButton.addEventListener('click', () => {
  addToInput('00');
});

  // Fonction pour ajouter du texte à l'entrée
function addToInput(value) {
  // Vérifier si le point est déjà présent dans l'entrée
  if (value === '.' && inputElement.value.includes('.')) {
    return;
  }

  // Vérifier si l'entrée commence par zéro
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

// Fonction pour réinitialiser la calculatrice
function resetCalculator() {
  inputElement.value = '';
  calculElement.textContent = '';
}

// Fonction pour effacer l'entrée
function clearInput() {
  inputElement.value = '';
}

// Fonction pour calculer le résultat
function calculateResult() {
  const input = inputElement.value;
  let calculation = calculElement.textContent + ' ' + input;

  // Vérifier si l'opération se termine par un point
  if (input.endsWith('.')) {
    calculation += '0';
  }

  // Vérifier si l'opération est valide
  if (isValidOperation(calculation)) {
    let result = calculate(calculation);

    // Gérer le pourcentage
    if (calculElement.textContent === '') {
      result /= 100;
    }
    

    inputElement.value = result;
    calculElement.textContent = calculation + ' =';
  } else {
    inputElement.value = '';
    calculElement.textContent = '';
    alert('Opération invalide !');
  }
}

// Fonction pour vérifier si l'opération est valide
function isValidOperation(input) {
  const regex = /^\s*-?\d+(\.\d+)?\s*([-+*/]\s*-?\d+(\.\d+)?\s*)*$/;
  return regex.test(input);
}