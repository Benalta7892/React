export default function Container() {
  const isLogged = false;

  let content;

  if (isLogged) content = "Bienvenue sur votre compte privée";
  else content = "Veuillez vous connecter";

  return (
    <div>
      <h1>Rendu Conditionnel avec if</h1>
      <p>{content}</p>
    </div>
  );
}

// Methode 1, pas très optimiser
// export default function Container() {
//   const isLogged = false;

//   if (isLogged) {
//     return (
//       <div>
//         <h1>Rendu conditionnel avec if</h1>
//         <p>Vous êtes connecté</p>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Rendu conditionnel avec if</h1>
//         <p>Vous n'êtes pas connecté</p>
//       </div>
//     );
//   }
// }
