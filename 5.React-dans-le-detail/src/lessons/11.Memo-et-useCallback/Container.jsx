import Card from "./Card";
import { useState, useCallback } from "react";

export default function Container() {
  const [count, setCount] = useState(0);

  const customLog = useCallback(() => console.log("Bonjour"), []);
  // function customLog() {
  //   console.log("Bonjour");
  // }

  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card txt={"test"} customLog={customLog} />
      <button onClick={() => setCount(count + 1)}>Incr</button>
    </div>
  );
}
