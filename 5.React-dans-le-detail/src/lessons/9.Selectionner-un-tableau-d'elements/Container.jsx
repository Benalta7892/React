import { useState, useRef, useEffect } from "react";

export default function Container() {
  const inputsRef = useRef([]);

  function addInputRef(el) {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
      console.log(`Ajout de l'élément :`, el); // Chaque élément ajouté
    }
    console.log("État actuel de inputsRef:", [...inputsRef.current]); // État instantané
  }

  return (
    <>
      <h1>Sélectionner un tableau d'éléments</h1>
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
    </>
  );
}
