import React from "react";

function Container() {
  const txt = "Test";

  function hundleClick(e, id) {
    console.log("Click", e, id);
  }

  return (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <ul className="list">
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <button>Valider</button>
      <p>{10 + 10}</p>
      <p>{"ab" + "c"}</p>
      <p>{"Le chat saute !".toLocaleUpperCase()}</p>
      <p>{txt}</p>
      <p>{[1, 2, 3, "a"]}</p>
      {/* <p>{[{ a: 5 }]}</p> // ne fonctionne pas avec un objet */}
      <p>{[<span>Hello World</span>]}</p>
      <input type="text" />
      <hr />
      <img src="" alt="" />
      {/* <p class="txt">Lorem ipsum dolor sit amet.</p> */} {/* ne fonctionne pas avec class */}
      <p className="txt">Lorem ipsum dolor sit amet.</p>
      <label htmlFor=""></label>
      <button aria-label="toggle button"></button>
      <button className="btn" onClick={(e) => hundleClick(e, 585)}>
        Click
      </button>
      ;
    </div>
  );
}

export default Container;

/*
btn.addEventListener("click", () => console.log("click"));
*/
