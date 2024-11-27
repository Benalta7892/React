import "./Container.css";

export default function Container() {
  const bgColor = "#333";

  return (
    // CSS en ligne
    <div>
      <h1 style={{ color: "crimson", backgroundColor: bgColor }}>Utiliser du CSS</h1>

      <p className="txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam debitis ea, pariatur commodi
        architecto! Velit vero et blanditiis ex. Incidunt laborum voluptates sit accusantium qui necessitatibus eveniet
        reiciendis quia!
      </p>
    </div>
  );
}
