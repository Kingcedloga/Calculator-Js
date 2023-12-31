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

## evaluer les expressions mathematiques

* try { ... } catch (error) { ... } : Cette structure try-catch permet de capturer les erreurs potentielles qui se produisent lors de l'évaluation de l'expression. Si une erreur se produit, elle est capturée et le code à l'intérieur du bloc catch est exécuté.

* return eval(cleanExpression(expression)); : Cette ligne évalue l'expression mathématique en utilisant la fonction eval(). La fonction cleanExpression() est appelée pour nettoyer l'expression avant son évaluation. Le résultat de l'évaluation est retourné.

* form.reset(); : Cette ligne réinitialise le formulaire en rétablissant les valeurs par défaut des champs du formulaire.

* clearResult(); : Cette ligne appelle la fonction clearResult(), qui n'est pas définie dans le code fourni. Il est probable que cette fonction soit définie ailleurs dans le programme et qu'elle soit utilisée pour réinitialiser la variable result.

* inputElement.textContent = ""; : Cette ligne définit le contenu texte de l'élément inputElement (probablement un élément d'affichage pour l'expression mathématique) à une chaîne vide, effaçant ainsi tout texte précédent.

* console.log(error); : Cette ligne affiche l'erreur capturée dans la console du navigateur. Cela peut être utile pour le débogage et le suivi des erreurs.

## les cliques du button egal

* if (!result) { ... } else { ... } : Cette structure conditionnelle vérifie si la variable result est définie ou non. Si result n'est pas défini (c'est-à-dire qu'il est null, undefined ou évalué à false), le code à l'intérieur du premier bloc if est exécuté. Sinon, le code à l'intérieur du bloc else est exécuté.

* if (userInput.value) { ... } : Cette condition vérifie si la valeur de userInput (probablement un champ de saisie) n'est pas vide. Si le champ de saisie n'est pas vide, le code à l'intérieur du bloc if est exécuté.

* inputElement.textContent = ${inputElement.textContent} ${userInput.value}; : Cette ligne ajoute la valeur de userInput à la fin du contenu texte de inputElement. Il semble que inputElement stocke l'expression mathématique en cours de construction.

* result = calculate(inputElement.textContent); : Cette ligne appelle la fonction calculate() en lui passant l'expression mathématique actuelle contenue dans inputElement.textContent. Le résultat de l'évaluation est stocké dans la variable result.

* userInput.value = result; : Cette ligne met à jour la valeur de userInput avec le résultat calculé. Cela peut être utile si la valeur du champ de saisie doit être utilisée ultérieurement.

* inputElement.textContent = result; : Si la variable result est déjà définie (c'est-à-dire qu'un calcul précédent a été effectué), cette ligne met à jour le contenu texte de inputElement avec la valeur de result. Cela permet d'afficher le résultat sans effectuer de nouveaux calculs.

* En résumé, la fonction equalsClick() est appelée lorsque le bouton "equals" est cliqué. Elle extrait la valeur du champ de saisie userInput et l'ajoute à l'expression mathématique en cours de construction. Ensuite, elle appelle la fonction calculate() pour évaluer l'expression et stocke le résultat dans la variable result. Si un calcul précédent a déjà été effectué, la fonction affiche simplement le résultat précédent sans effectuer de nouveaux calculs.

## les cliques du button pourcentage

* if (userInput.value) { ... } : Cette condition vérifie si la valeur de userInput (probablement un champ de saisie) n'est pas vide. Si le champ de saisie n'est pas vide, le code à l'intérieur du bloc if est exécuté.

* inputElement.textContent = ${inputElement.textContent} ${userInput.value} %; : Cette ligne ajoute la valeur de userInput suivie d'un pourcentage à la fin du contenu texte de inputElement. Il semble que inputElement stocke l'expression mathématique en cours de construction.

* result = userInput.value / 100; : Cette ligne calcule le pourcentage correspondant à la valeur saisie par l'utilisateur. Elle divise la valeur de userInput par 100 et stocke le résultat dans la variable result.

* userInput.value = result; : Cette ligne met à jour la valeur de userInput avec le résultat du calcul précédent. Cela permet de remplacer la valeur saisie par l'utilisateur par le résultat du pourcentage calculé.

* En résumé, la fonction PercentageClick() est appelée lorsque le bouton "percentage" est cliqué. Elle récupère la valeur du champ de saisie userInput, ajoute cette valeur suivie d'un pourcentage à l'expression mathématique en cours de construction, puis calcule le pourcentage correspondant et met à jour la valeur du champ de saisie avec le résultat.

## les cliques du minus

* userInput.value = minusSign; : Cette ligne attribue la valeur de la variable minusSign (qui semble être le signe moins "-") à la propriété value de l'élément userInput. Cela remplace la valeur actuelle du champ de saisie userInput par le signe moins.
* En résumé, la fonction minusClick() est appelée lorsque le bouton "minus" est cliqué. Elle met à jour la valeur du champ de saisie userInput avec le signe moins ("-"). Cela peut être utilisé pour indiquer que l'utilisateur souhaite effectuer une opération de soustraction.

## les cliques des autres operateurs
* if (userInput.value) { ... } else { ... } : Cette structure conditionnelle vérifie si la valeur de userInput (probablement un champ de saisie) est vide ou non. Si le champ de saisie n'est pas vide, le code à l'intérieur du premier bloc if est exécuté. Sinon, le code à l'intérieur du bloc else est exécuté.

* Si le champ de saisie n'est pas vide :

* const expression = result ? ... : ...; : Cette ligne construit une expression en fonction de l'état de la variable result. Si result est définie (c'est-à-dire qu'un calcul précédent a été effectué), l'expression est construite en ajoutant l'opérateur operator à la fin de l'expression actuelle dans inputElement.textContent. Sinon, l'expression est construite en ajoutant la valeur de userInput suivie de l'opérateur operator à la fin de l'expression actuelle dans inputElement.textContent.
result = result && undefined; : Cette ligne réinitialise la variable result en la définissant sur undefined. Cela permet de réinitialiser le résultat précédent et de s'assurer que le calcul sera effectué avec la nouvelle expression construite.
inputElement.textContent = expression; : Cette ligne met à jour le contenu texte de inputElement avec la nouvelle expression construite.
userInput.value = ""; : Cette ligne réinitialise la valeur du champ de saisie userInput en la définissant sur une chaîne vide.
Si le champ de saisie est vide et l'opérateur est le signe moins ("minusSign") :

* minusClick(userInput); : Cette ligne appelle la fonction minusClick() pour mettre à jour la valeur du champ de saisie userInput avec le signe moins ("-"). Cela permet d'indiquer que l'utilisateur souhaite effectuer une opération de soustraction.
* En résumé, la fonction otherOperatorsClick() est appelée lorsque l'un des boutons d'opérateurs est cliqué, à l'exception du bouton "minus". Si le champ de saisie userInput n'est pas vide, elle construit une nouvelle expression en fonction de l'état de la variable result, met à jour le contenu texte de inputElement avec la nouvelle expression, réinitialise la variable result et réinitialise la valeur du champ de saisie userInput. Si le champ de saisie est vide et l'opérateur est le signe moins, la fonction appelle la fonction minusClick() pour mettre à jour la valeur du champ de saisie avec le signe moins.

## les cliques du button reset

* form.reset(); : Cette ligne réinitialise les valeurs des champs de saisie et des autres éléments de formulaire à leurs valeurs par défaut. Elle rétablit les valeurs initiales des éléments du formulaire, ce qui peut inclure la suppression des données saisies par l'utilisateur.

* En résumé, la fonction resetClick() est appelée lorsque le bouton de réinitialisation est cliqué. Elle supprime le contenu de l'élément inputElement en le vidant complètement, puis réinitialise les valeurs des champs de saisie et des autres éléments du formulaire à leurs valeurs par défaut à l'aide de la méthode form.reset(). Cela permet de réinitialiser le formulaire à son état initial.

## les cliques des buttons

* if (textContent === plusMinusSign) { ... } else { ... } : Cette structure conditionnelle vérifie si la valeur de textContent est égale à plusMinusSign. plusMinusSign semble être une variable contenant un signe plus ou moins ("±"). Si la condition est vraie, le code à l'intérieur du premier bloc if est exécuté. Sinon, le code à l'intérieur du bloc else est exécuté.

* Si textContent est égal à plusMinusSign :

userInput.value = +userInput.value * -1; : Cette ligne convertit la valeur du champ de saisie userInput en nombre en utilisant l'opérateur unaire +. Elle multiplie ensuite le nombre par -1 pour inverser son signe. Cela permet d'effectuer un changement de signe sur la valeur saisie par l'utilisateur.
Sinon :

* userInput.value = ${userInput.value}${textContent}; : Cette ligne ajoute la valeur de textContent à la fin de la valeur actuelle du champ de saisie userInput. Cela permet de concaténer le texte de textContent à la valeur existante du champ de saisie.
En résumé, la fonction buttonClick() est appelée lorsque l'un des boutons est cliqué. Si le texte du bouton correspond à plusMinusSign, la fonction inverse le signe de la valeur saisie par l'utilisateur en la multipliant par -1. Sinon, le texte du bouton est ajouté à la fin de la valeur existante du champ de saisie. Cela permet d'ajouter des chiffres et d'autres symboles au champ de saisie lorsqu'un bouton est cliqué.

## initialisations 

* initialisations de l'écran

##

* if (textContent === equalsSign) { ... } else if (textContent === percentageSign) { ... } else { ... } : Cette structure conditionnelle vérifie si la valeur de textContent correspond à equalsSign, percentageSign ou à une autre valeur. equalsSign et percentageSign semblent être des variables représentant respectivement le signe égal "=" et le signe pourcentage "%". Selon la valeur de textContent, le code à l'intérieur du bloc correspondant sera exécuté.

* Si textContent correspond à equalsSign :

* equalsClick(inputElement, userInput); : Cette ligne appelle la fonction equalsClick() en lui passant les arguments inputElement et userInput. Cela semble indiquer que le bouton cliqué est le bouton égal ("=") et que la fonction equalsClick() sera responsable de l'exécution du calcul final.
Sinon, si textContent correspond à percentageSign :

* PercentageClick(userInput, inputElement); : Cette ligne appelle la fonction PercentageClick() en lui passant les arguments userInput et inputElement. Cela semble indiquer que le bouton cliqué est le bouton pourcentage ("%") et que la fonction PercentageClick() sera responsable du calcul du pourcentage.
Sinon :

* otherOperatorsClick(textContent, userInput, inputElement); : Cette ligne appelle la fonction otherOperatorsClick() en lui passant les arguments textContent, userInput et inputElement. Cela semble indiquer que le bouton cliqué correspond à un autre opérateur (comme l'addition, la soustraction, la multiplication, etc.) et que la fonction otherOperatorsClick() sera responsable de la gestion de cet opérateur.
* En résumé, la fonction submitClick() est appelée lorsque l'un des boutons est cliqué. Selon le texte du bouton cliqué, la fonction appelle d'autres fonctions spécifiques pour gérer les différentes actions. Si le bouton correspond au bouton égal ("="), la fonction equalsClick() est appelée. Si le bouton correspond au bouton pourcentage ("%"), la fonction PercentageClick() est appelée. Sinon, la fonction otherOperatorsClick() est appelée pour gérer l'opérateur spécifique correspondant au bouton cliqué.

## ecouteur d'evenement aux buttons

* buttons.forEach(function(button) { ... }) : Cette boucle itère sur chaque élément button dans le tableau buttons.

* button.addEventListener("click", function() { ... }) : Cela ajoute un écouteur d'événements de clic à chaque bouton, de sorte que lorsque l'utilisateur clique sur un bouton, la fonction anonyme est exécutée.

* switch (this.type) { ... } : Cette structure switch examine le type du bouton sur lequel l'événement de clic a été déclenché, représenté par this.type.

* case "submit": submitClick(this.textContent); break; : Si le type du bouton est "submit" (un bouton de soumission), la fonction submitClick() est appelée en passant le texte du contenu du bouton (this.textContent) en tant qu'argument.

*bcase "reset": resetClick(inputElement, form); break; : Si le type du bouton est "reset" (un bouton de réinitialisation), la fonction resetClick() est appelée en passant inputElement et form en tant qu'arguments.

* case "button": buttonClick(this.textContent, userInput); break; : Si le type du bouton est "button" (un bouton normal), la fonction buttonClick() est appelée en passant le texte du contenu du bouton (this.textContent) et userInput en tant qu'arguments.

* default: break; : Si le type du bouton ne correspond à aucun des cas précédents, aucune action supplémentaire n'est effectuée.

* En résumé, le code ajoute des écouteurs d'événements de clic aux boutons. Lorsqu'un bouton est cliqué, la fonction appropriée est appelée en fonction de son type. Si le bouton est de type "submit", la fonction submitClick() est appelée. Si le bouton est de type "reset", la fonction resetClick() est appelée. Si le bouton est de type "button", la fonction buttonClick() est appelée. Les fonctions correspondantes effectueront les actions appropriées en fonction du texte ou du contenu du bouton cliqué et des éléments associés tels que userInput, inputElement et form.

## ecouteur d'evenement  userInput

* Cette partie de code attache un écouteur d'événement d'entrée (input) à l'élément userInput, qui semble être un champ de saisie de l'utilisateur. Voici ce que fait le code en détail :

* userInput.addEventListener("input", function() { ... }) : Cela ajoute un écouteur d'événement d'entrée à l'élément userInput, de sorte que lorsque l'utilisateur saisit ou modifie le contenu du champ de saisie, la fonction anonyme est exécutée.

* this.value = this.value.match(/[0-9.]*/)[0]; : À l'intérieur de la fonction, cette ligne applique une expression régulière pour filtrer et modifier la valeur du champ de saisie.

* this.value représente la valeur actuelle du champ de saisie.
.match(/[0-9.]*/) effectue une correspondance de la valeur avec l'expression régulière [0-9.]*, qui recherche une séquence de chiffres (0-9) et de points (.) de longueur variable (*) dans la valeur du champ de saisie.
[0] récupère le premier élément correspondant trouvé.
En d'autres termes, cette ligne supprime tous les caractères non numériques ou non des points de la valeur du champ de saisie, ne laissant que les chiffres et les points décimaux.

* En résumé, lorsque l'utilisateur saisit ou modifie le contenu du champ de saisie userInput, le code filtre et modifie la valeur du champ en supprimant tous les caractères non numériques ou non des points. Cela permet de s'assurer que la valeur du champ de saisie ne contient que des chiffres et des points décimaux.

## ecouteur d'evenement  form (submit)

* Cette ligne code attache un écouteur d'événement de soumission (submit) au formulaire représenté par l'élément form. Voici ce que fait le code en détail :

* form.addEventListener("submit", function(event) { ... }) : Cela ajoute un écouteur d'événement de soumission au formulaire, de sorte que lorsque l'utilisateur soumet le formulaire en cliquant sur un bouton de soumission ou en appuyant sur la touche Entrée, la fonction anonyme est exécutée.

* event.preventDefault(); : À l'intérieur de la fonction, cette ligne empêche le comportement par défaut de la soumission du formulaire. Cela signifie que lorsque l'événement de soumission se produit, la page ne sera pas actualisée ou rechargée comme elle le ferait normalement lorsqu'un formulaire est soumis.

* En résumé, lorsque l'utilisateur soumet le formulaire, le code empêche le comportement par défaut de la soumission du formulaire, ce qui évite le rechargement ou l'actualisation de la page. Cela peut être utilisé pour effectuer des opérations personnalisées ou des validations supplémentaires avant de soumettre le formulaire ou pour gérer la soumission du formulaire via JavaScript plutôt que de laisser le comportement par défaut du navigateur s'exécuter.

## ecouteur d'evenement  form (reset)
* Ce code attache un écouteur d'événement de réinitialisation (reset) au formulaire représenté par l'élément form. Voici ce que fait le code en détail :

* form.addEventListener("reset", function() { ... }) : Cela ajoute un écouteur d'événement de réinitialisation au formulaire, de sorte que lorsque l'utilisateur effectue une action de réinitialisation du formulaire (par exemple, en cliquant sur un bouton de réinitialisation), la fonction anonyme est exécutée.

* clearResult(); : À l'intérieur de la fonction, cette ligne appelle la fonction clearResult(). Cela suggère que la fonction clearResult() est responsable de la suppression ou de la réinitialisation des résultats ou des données liées au formulaire.

* En résumé, lorsque l'utilisateur effectue une action de réinitialisation du formulaire, le code exécute la fonction clearResult(), qui est chargée de supprimer ou de réinitialiser les résultats ou les données associées au formulaire. Cela permet de mettre à zéro les champs de saisie, de réinitialiser les états ou les valeurs, ou d'effectuer d'autres actions nécessaires lors de la réinitialisation du formulaire.