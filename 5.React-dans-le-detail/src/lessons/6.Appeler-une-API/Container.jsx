import { useState, useEffect } from "react";
import "./Container.css";
import spinner from "./spinner.svg";

export default function Container() {
  const [APIState, setAPIState] = useState({
    loading: false,
    error: true,
    data: undefined,
  });

  let content;
  if (APIState.loading) content = <img src={spinner} alt="icône de chargement" />;
  else if (APIState.error) content = <p>Une erreur est survenue...</p>;
  else if (APIState.data?.length > 0) {
    content = (
      <ul>
        {APIState.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span>{item.phone}</span>
          </li>
        ))}
      </ul>
    );
  } else if (APIState.dada?.length === 0) {
    content = <p>Votre requête ne correspond à aucune données.</p>;
  }

  return (
    <div>
      <h1>Appeler une API</h1>
      {/* {APIState.loading && <img src={spinner} alt="icône de chargement" />} */}
      {content}
    </div>
  );
}
