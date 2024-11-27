import { useState } from "react";
import "./Container.css";

export default function Container() {
  const [validation, setValidation] = useState(false);

  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez-vous ?</label>
        <input type="checkbox" onClick={() => setValidation(!validation)} />
        <p
          className={`${validation ? "valid" : "invalid"}`}
          // style={{ color: `${validation ? "lightgreen" : "red"}` }}
        >
          {validation ? "Bravo, vous pouvez envoyer le formulaire" : "Vous devez cocher la case"}
        </p>
        {validation ? <p>True</p> : <p>False</p>}
      </form>
    </div>
  );
}
