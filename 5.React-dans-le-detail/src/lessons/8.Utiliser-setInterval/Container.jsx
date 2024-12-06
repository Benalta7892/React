import { useState, useEffect } from "react";

export default function Container() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount(count + 1);
      // console.log("hello");
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [count]);

  // setInterval(() => {
  //   setCount(count + 1);
  // }, 1000);

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  );
}
