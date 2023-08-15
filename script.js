import { calculate } from "./calculator.js";

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