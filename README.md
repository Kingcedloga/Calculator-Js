## Sélectionner les elements

* const form = document.querySelector("form"); : Cette ligne sélectionne le premier élément <form> dans le document HTML et le stocke dans la variable form.

* const buttons = form.querySelectorAll("button"); : Cette ligne sélectionne tous les éléments <button> qui se trouvent à l'intérieur de l'élément <form> et les stocke dans la variable buttons.

* const inputElement = document.querySelector("#input"); : Cette ligne sélectionne le premier élément ayant l'ID "input" dans le document HTML et le stocke dans la variable inputElement.

* const userInput = form.elements["userInput"]; : Cette ligne sélectionne l'élément de formulaire avec le nom "userInput" et le stocke dans la variable userInput.

* const percentageSign = "%"; : Cette ligne définit la variable percentageSign avec la valeur "%".

* const minusSign = "-"; : Cette ligne définit la variable minusSign avec la valeur "-".

* const equalsSign = "="; : Cette ligne définit la variable equalsSign avec la valeur "=".

* const plusMinusSign = "+/-"; : Cette ligne définit la variable plusMinusSign avec la valeur "+/-".

* let result; : Cette ligne déclare la variable result sans lui attribuer une valeur spécifique.

## conversion des symboles

* La fonction cleanExpression(expression) est définie. Elle prend une expression en tant que paramètre et effectue plusieurs remplacements de caractères dans cette expression. Ces remplacements incluent la conversion des symboles de division (÷) en barres obliques (/), des symboles de multiplication (×, x, X) en astérisques (*), la suppression des espaces blancs, la conversion des symboles de pourcentage (%) en division par 100. La fonction retourne l'expression nettoyée.