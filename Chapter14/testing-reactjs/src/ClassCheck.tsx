import { useState } from "react";

export function ClassCheck() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <button
        className={clicked ? "active" : ""}
        onClick={() => setClicked(true)}
      >
        Click me
      </button>

      {clicked && <div data-testid="hello">HELLO</div>}
    </>
  );
}
