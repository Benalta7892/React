import Child from "./Child";
export default function Container() {
  return (
    <div>
      <h1>Props children</h1>
      {/* <Child tkt={"test"} /> */}
      <Child>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores aspernatur placeat accusamus,
          corrupti, veritatis sapiente possimus commodi facilis porro temporibus totam laudantium fuga aliquam delectus
          error ullam cupiditate consectetur!
        </p>
      </Child>
      <Child>
        <button>Valider</button>
      </Child>
      <Child>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </Child>
    </div>
  );
}
