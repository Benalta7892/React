export default function Card(props) {
  console.log(props);

  return (
    <div>
      <p>Voici la carte</p>
      <p>User : {props.id}</p>
      <p>State du parent : {props.state}</p>
    </div>
  );
}
