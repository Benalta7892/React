import { memo } from "react";

export default memo(function Card({ txt }) {
  console.log("RENDER");

  return (
    <div>
      <p>Carte</p>
      <p>{txt}</p>
    </div>
  );
});
