/*
    Découvrons et rappelons les principales caractéristiques des déclarations let et const, et leurs différences avec le mot-clé var.
*/

/*
    1. let & const sont block-scoped, var est function-scoped.
*/

if (true) {
  var test = "Hello World!";
  let test2 = "Test 2";
  const test3 = "Test 3";
}
// console.log(test, test2, test3); // Hello World!

function foo() {
  var number = 10;
  let number2 = 99;

  console.log(number);
}
// foo();
// console.log(number2); // ReferenceError: number2 is not defined

/*
    2. On ne peut pas déclarer de const vide, contrairement à let ou var.
*/

var animal; // undefined var peut être vide
let lion; // undefined let peut être vide
const cat = "Feline"; // Feline const ne peut pas être vide
// console.log(lion); // undefined

/*
   3. On peut redéclarer des variables var sans provoquer d'erreurs.
*/

// var dog = "Coco";
// var dog = "Tobi";
// console.log(dog); // Tobi

// let cat = "Feline"; // SyntaxError: Cat est déjà déclaré
// let cat = "Lorem ipsum"; // SyntaxError: Cat est déjà déclaré

/*
    4. Une variable var se fait hoisted et peut être utilisée avant sa déclaration, car elle est initialisée à undefined.
    Let & const sont hoisted mais pas initialisées.

    Hoisting JavaScript
    Les déclarations de fonctions et de variables sont hissées en JavaScript. Cela signifie qu'elles sont stockées dans la mémoire du VO(Variables Object) du contexte d'exécution actuel et rendues disponibles dans le contexte d'exécution avant même que l'exécution du code ne commence.
*/

// var test = "test"; // undefined
// console.log(test); // test

// console.log(test); // "Hello World!" en ligne 10 et undefined si ligne 10 est commentée
var test = "test"; // undefined
// console.log(test2); // ReferenceError: Cannot access 'test2' before initialization
let test2 = "test2"; // On ne peut pas accéder à test2 avant son initialisation avec let

/*
    5. Une variable var déclarée globalement se fait enregistrer dans l'objet global, pouvant provoquer des bugs de clash entre variables globales.
    Let et const peuvent se faire enregistrer globalement, mais sans être accessibles comme propriétés directes de window, elles sont inscrites dans l'environnement lexical de l'objet global (l'ensemble des déclarations accessibles par ce dernier).
*/

var userName = "Julia";
// console.log(window); // userName: "Julia"
let userName2 = "Giovanni";
console.log(window); // userName2: N'est pas une propriété directe de window donc pas visible dans la console
