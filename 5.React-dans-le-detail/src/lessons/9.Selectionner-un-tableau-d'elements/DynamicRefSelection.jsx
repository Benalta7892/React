import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";

export default function DynamicRefSelection() {
  const [fruits, setFruits] = useState([
    { id: 1, value: "🍓" },
    { id: 1, value: "🍉" },
    { id: 1, value: "🍒" },
  ]);

  console.log(nanoid(8));

  return <div>DynamicRefSelection</div>;
}
