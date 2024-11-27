export default function Container() {
  const data = [
    {
      id: 1,
      name: "Marie",
    },
    {
      id: 2,
      name: "Paul",
    },
    {
      id: 3,
      name: "Louise",
    },
  ];

  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      {data.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}

      {/* Equivaut à : */}
      {/* {[<li>{data[0].name}</li>, <li>{data[1].name}</li>, <li>{data[2].name}</li>]} */}
    </div>
  );
}
