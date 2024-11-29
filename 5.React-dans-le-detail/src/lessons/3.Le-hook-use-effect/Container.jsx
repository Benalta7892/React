import "./Container.css";
import { useEffect, useState } from "react";

export default function Container() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Après première creation");
  }, [count]);
  console.log("Mise à jour");

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
    </div>
  );
}
