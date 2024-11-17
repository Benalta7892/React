/*
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :
    1. Elle retourne toujours la même chose en fonction des mêmes arguments fournis.
    2. Elle n'utilise aucune valeurm mutable et n'a pas d'effets secondaires en
    dehors de son bloc.

*/

function add(a, b) {
  return a + b;
}
// console.log(add(10, 10)); // 20

// // let VAT = 20;
// // VAT = 17;
// const FRVAT = { value: 20 };
// FRVAT.value = 17;
// function getFinalPrice(price, VAT) {
//   return (price * (100 + FRVAT.value)) / 100;
// }
// console.log(getFinalPrice(100)); // 117

function getFinalPrice(price, VAT) {
  return (price * (100 + VAT)) / 100;
}
console.log(getFinalPrice(100, 20)); // 120
console.log(getFinalPrice(100, 5)); // 105
console.log(getFinalPrice(100, 27)); // 127
