import { useEffect, useState } from "react";
import "./Card.css";

export default function Card() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Effet");

    return () => console.log("Fonction de nettoyage");
  });

  return (
    <div className="card">
      <p>Voici la carte et son State {state}</p>
      <button onClick={() => setState(state + 1)}>Incrémenter</button>
    </div>
  );
}
