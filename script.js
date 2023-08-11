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