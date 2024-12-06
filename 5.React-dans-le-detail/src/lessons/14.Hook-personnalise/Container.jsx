import useAPICall from "./hooks/useAPICall";
import spinner from "./spinner.svg";

export default function Container() {
  const { catData, error, loading } = useAPICall();

  return (
    <div>
      <h1>Photo de chats 🐾</h1>

      {loading && !error && <img src={spinner} alt="icône de chargement" />}

      {error && <p>Une erreur est survenue ...</p>}

      {catData && <img src={catData[0].url} alt="photo d'un chat" />}
    </div>
  );
}
