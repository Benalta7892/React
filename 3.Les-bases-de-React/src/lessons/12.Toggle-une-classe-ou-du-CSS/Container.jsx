import "./Container.css";
import { useState } from "react";

export default function Container() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenue sur NotesMania</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit consectetur, assumenda nobis at magni ipsam,
        eius nulla nam obcaecati rem consequuntur cumque minima deleniti reiciendis, laborum ex minus iure.
      </p>

      <button onClick={() => setDarkMode(!darkMode)}>Activer le {darkMode ? "Light Mode" : "Dark mode"}</button>
    </div>
  );
}
