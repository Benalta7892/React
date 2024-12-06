import Card from "./Card";
import { useState } from "react";

export default function Container() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card txt={"test"} />
      <button onClick={() => setCount(count + 1)}>Incr</button>
    </div>
  );
}
