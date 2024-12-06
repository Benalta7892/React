import { useReducer } from "react";

export default function Container() {
  const [count, countDispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        // console.log(action);
        return state + 1;
      case "decrement":
        return state - 1;
      case "multiply":
        return state * 10;
      case "divide":
        return state / 10;
    }
  }

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
      <button onClick={() => countDispatch({ type: "increment", payload: 5 })}>Incrémenter</button>
      <button onClick={() => countDispatch({ type: "decrement", payload: 5 })}>Décrémenter</button>
      <button onClick={() => countDispatch({ type: "multiply", payload: 5 })}>Multiplier</button>
      <button onClick={() => countDispatch({ type: "divide", payload: 5 })}>Diviser</button>
    </div>
  );
}
