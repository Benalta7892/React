import { useState, useRef } from "react";
import "./Container.css";

export default function Container() {
  const [state, setState] = useState("");

  function handleInput(e) {
    setState(e.target.value);
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <form>
        <label htmlFor="pseudo">Votre pseudo</label>
        <input onChange={handleInput} type="text" id="pseudo" value={state} />
        {!state && <p>Veuillez remplir cet input</p>}
        <button>Envoyer</button>
        <p>Votre pseudo : {state}</p>
      </form>
    </div>
  );
}
