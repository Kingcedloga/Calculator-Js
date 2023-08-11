{ calculate } import './calculator';

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