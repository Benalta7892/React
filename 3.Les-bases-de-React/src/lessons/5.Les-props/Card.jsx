export default function Card({ id, state, changeState }) {
  console.log(id, state);

  return (
    <div>
      <p>Voici la carte</p>
      <p>User : {id}</p>
      <p>State du parent : {state}</p>
      <button onClick={() => changeState("Olaaaaa")}>Changer le state</button>
    </div>
  );
}
