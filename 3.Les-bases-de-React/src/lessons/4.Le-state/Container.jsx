// 1. Il faut importer le useState depuis react pour pouvoir l'utiliser dans le composant.
// useState est un Hook de React qui permet d'ajouter un state à un composant fonctionnel.
import { useState } from "react";

export default function Container() {
  // // Le state est une variable qui est propre à un composant, il représente des
  // // données qu l'on peut utiliser dans le composant. On peut modifier le state
  // // en utilisant la méthode setState (Mettre à jour ces données et le composant
  // // sera reaffiché avec ces nouvelles données).

  // // 2. On peut créer un state en utilisant le Hook useState. useState prend en
  // // paramètre la valeur initiale du state.
  // const countState = useState(0);
  // console.log(countState); // [0, function]

  // // 3. useState retourne un tableau avec deux éléments. Le premier élément est
  // // la valeur actuelle du state et le deuxième élément est une fonction qui
  // // permet de mettre à jour le state.
  // return (
  //   <div>
  //     <p>{countState[0]}</p>
  //   </div>
  // );

  // // Manière plus concise : On peut utiliser la destructuration pour récupérer les valeurs du tableau
  // // retourné par useState.
  const [count, setCount] = useState(0);
  console.log("Mise à jour !");

  function handleClick() {
    // setCount(count + 1);

    // Avec une fonction callback : On peut passer une fonction à setCount qui prend en paramètre
    // la valeur actuelle du state et retourne la nouvelle valeur du state. Cela permet de s'assurer
    // que la valeur du state est bien à jour et de ne pas avoir de problème si on met à jour le state
    // quand on veux utiliser plusieurs fois la valeur actuelle du state. Si par exemple, il y a des
    // conditions qui dépendent de la valeur actuelle du state, il faut utiliser une fonction callback.
    // En passant a chaque fois la derniere valeur du callback. Utile aussi pour les setIntervals. Ça permet
    // de retrouver une valeur de state à jour.

    setCount((count) => count + 1); // On incrémente la valeur actuelle du state de 1 et si
    // on clique plusieurs fois sur le bouton, la valeur du state sera bien à jour meme si on
    // clique plusieurs fois sur le bouton avant que le composant soit réaffiché.
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  );
}
