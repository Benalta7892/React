import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";

export default function DynamicRefSelection() {
  const [fruits, setFruits] = useState([
    { id: nanoid(8), value: "🍓" },
    { id: nanoid(8), value: "🍉" },
    { id: nanoid(8), value: "🍒" },
  ]);

  function deleteFruit(id) {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  }

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id} onClick={() => deleteFruit(fruit.id)}>
            {fruit.value}
          </li>
        ))}
      </ul>
      <button onClick={() => setFruits([...fruits, { id: nanoid(8), value: "🍍" }])}>Add Fruits</button>
    </div>
  );
}
