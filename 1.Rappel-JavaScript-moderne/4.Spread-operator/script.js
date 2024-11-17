/*
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1, 2, 3, { a: 5 }];
console.log(...array); // 1 2 3

const shallowArrayCopy = [...array, 4, 5, 6];
console.log(shallowArrayCopy); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}s
array[3].a = 555;
console.log(shallowArrayCopy); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}s

const obj = {
  name: "Laura",
  age: 26,
};
const shallowObjCopy = { ...obj, dogName: "Tim" };
console.log(shallowObjCopy); // {name: "Laura", age: 26}

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.

const shallowObjCopy2 = { ...obj, name: "Anna", age: 99 };
console.log(shallowObjCopy2); // {name: "Anna", age: 26}

// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court.";
const strCopyArray = [...str];
console.log(strCopyArray); // ["L", "e", " ", "c", "h", "a", "t", " ", "s", "a", "u", "t", "e", ",", " ", "l", "e", " ", "c", "h", "i", "e", "n", " ", "c", "o", "u", "r", "t", "."]
