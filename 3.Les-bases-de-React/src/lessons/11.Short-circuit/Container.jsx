export default function Container() {
  const isLogged = true;

  return (
    <div>
      <h1>Bienvenue sur BooksParadise</h1>

      {/* {isLogged ? <button>Afficher votre collection</button> : ""} */}

      {/* Meilleure manière */}
      {isLogged && <button>Afficher votre collection</button>}
    </div>
  );
}
