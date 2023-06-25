import * as ReactDOM from "react-dom";

const handleClick = () => {
  console.log("Button clicked!");
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <section>
    <button onClick={handleClick}>Click me</button>
  </section>
);
