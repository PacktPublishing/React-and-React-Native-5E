import * as React from "react";
import Timer from "./Timer";

const ShowHideTimer = ({ show }) => (show ? <Timer /> : null);

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>
      <ShowHideTimer show={show} />
    </>
  );
}

export default App;
