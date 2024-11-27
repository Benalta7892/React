import { useState } from "react";
import Card from "./Card";

export default function Container() {
  const [state, setState] = useState("Hello World");

  const id = 1234;

  return (
    <div>
      <h1>Les props</h1>
      {/* {Card({id: id})}  */} {/* Appel de la fonction, C'est la meme chose que la ligne suivante */}
      <Card id={id} state={state} />
      <p>State du container : {state}</p>
    </div>
  );
}
