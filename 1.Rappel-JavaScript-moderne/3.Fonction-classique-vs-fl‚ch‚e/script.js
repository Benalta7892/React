/*
    Redécouvrons ensemble les fonctions fléchées et leurs différences avec les fonctions classiques.
*/

/*
    1. Syntaxe.
    La syntaxe est moins chargée, pouvant ainsi être plus facilement utilisée en tant qu'argument, notamment en tant que fonction callback.
*/

// Fonction classique
function add(a, b) {
  return a + b;
}

// Fonction fléchée
const add2 = (a, b) => a + b; // Si un seul argument, pas besoin de parenthèses.Retun implicite.
// console.log(add2(5, 10)); // 15

const numbers = [1, 2, 3];
// numbers.forEach((el) => console.log(el)); // 1 2 3

/*
    2. Le mot clé this.

    Les fonctions classiques créent un mot clé this lors de leur exécution, en fonction de l'objet qui les appelle.
    Si elles ne sont pas appelées par un objet, this est automatiquement égal à window (l'objet global).

    Les fonctions fléchées ne créent pas de this, néanmoins elles peuvent lire le this d'une fonction classique si elles se situent dedans.
    Si elles ne sont pas dans l'environnement(donc contexte) une fonction classique, elles lisent le this de l'objet global, car elles sont dans le contexte d'execution global.
*/

// const person = {
//   age: 45,
//   getAge: function () {
//     return this.age; // this = person pour une fonction classique
//   },
// };
// console.log(person.getAge()); // 45

// function foo() {
//   console.log(this); // this = window pour une fonction de plus haut niveau
// }
// foo(); // window

// const person = {
//   age: 45,
//   getAge: function () {
//     const arrowInsideClassic = () => {
//       console.log("From Arrow", this); // this = person
//     };
//     arrowInsideClassic();

//     function foo() {
//       console.log("Classic inside classic", this); // this = window pour une fonction de plus haut niveau
//     }
//     foo();
//     return this; // this est ici l'objec global window car la fonction getAge est une fonction classique
//   },
// };
// console.log(person.getAge()); // { age: 45, getAge: [Function: getAge] }

const person = {
  age: 45,
  getAge: function () {
    const arrowInsideClassic = () => {
      console.log("From Arrow", this); // this = person
    };
    arrowInsideClassic();
    return this; // this est ici l'objec global window car la fonction getAge est une fonction classique
  },
  getArrowAge: () => {
    return this; // this = window car la fonction getArrowAge est une fonction fléchée et elle est dans le contexte global
  },
};
console.log(person.getAge()); // { age: 45, getAge: [Function: getAge] }
console.log(person.getArrowAge()); // window

// window.foo(); // window

/*
    3. arguments
    Même chose pour l'objet "arguments" qui est crée chez les fonctions classiques, mais pas les fonctions fléchées.
*/

// Fonction classique
function faz() {
  console.log(arguments); // Liste des arguments passés à la fonction
}
faz(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }

// Fonction fléchée
const foz = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};
foz(1, 2, 3); // ReferenceError: arguments is not defined car arguments est une variable locale à une fonction classique et n'existe pas dans une fonction fléchée.

/*
    Petit recap pour vous aider avec la valeur de this dans des fonctions classiques vs fléchées (hors fonction constructeur / usestrict)

    Fonction classique :
    1. La fonction est appelée depuis un objet ? this = cet objet.
    2. La fonction n'est pas appelée depuis un objet ? this = objet global window.

    Fonction fléchée :
    1. La fonction fléchée se situe dans une fonction classique ? this = le this de la fonction classique.
    2. La fonction fléchée ne se situe pas dans une fonction classique ? this = objet global window.
*/
