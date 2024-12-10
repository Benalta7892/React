import "./Content.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Content() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1>You are in {darkMode ? "Dark" : "Light"} mode.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In praesentium dicta numquam sequi voluptatum nostrum,
        reprehenderit aspernatur? Ut, recusandae cumque iste amet aliquid, facilis adipisci eaque placeat officiis
        ratione odit dolores repudiandae ipsum maxime illo voluptate possimus quos laborum corporis voluptatum ipsa
        repellat aperiam quod commodi? Alias soluta similique modi unde ipsa labore deserunt. Quis ex odit delectus,
        distinctio architecto laboriosam? Saepe deserunt autem quibusdam esse exercitationem quos nostrum architecto?
        Inventore harum molestias recusandae cupiditate sequi, optio, reiciendis modi, corrupti provident explicabo aut
        ullam doloremque libero est cum expedita temporibus dicta. Ullam obcaecati temporibus in pariatur voluptatum
        adipisci, expedita minus.
      </p>
    </div>
  );
}
