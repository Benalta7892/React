import { useState, useRef } from "react";
import "./Container.css";

export default function Container() {
  const [state, setState] = useState("");

  function handleInput(e) {
    setState(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(state);

    console.log(emailRef.current.value);
  }

  const emailRef = useRef();

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Votre pseudo</label>
        <input onChange={handleInput} type="text" id="pseudo" value={state} />
        {/* {!state && <p>Veuillez remplir cet input</p>} */}

        <label htmlFor="email">Votre email</label>
        <input ref={emailRef} type="email" id="email" />

        <button>Envoyer</button>
        <p>Votre pseudo : {state}</p>
      </form>
    </div>
  );
}
