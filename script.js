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
// Ajouter des écouteurs d'événements aux boutons
buttons.forEach(button => {
    button.addEventListener('click', () => {
      addToInput(button.textContent);
    });
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
addToInput = (value) => {
  inputElement.value += value;
}
// Fonction pour réinitialiser la calculatrice
resetCalculator = () => {
  inputElement.value = '';
  calculElement.textContent = '';
}

// Fonction pour effacer l'entrée
clearInput = () => {
  inputElement.value = '';
}
// Fonction pour calculer le résultat
function calculateResult() {
  const input = inputElement.value;
  const calculation = calculElement.textContent + ' ' + input;

  // Vérifier si l'entrée est une opération valide
  if (isValidOperation(input)) {
    const result = eval(calculation);
    inputElement.value = result;
    calculElement.textContent = calculation + ' =';
  } else {
    inputElement.value = '';
    calculElement.textContent = '';
    alert('Opération invalide !');
  }
}
