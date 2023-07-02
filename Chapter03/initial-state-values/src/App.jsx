import * as React from "react";

export default function App() {
  const [name] = React.useState("Mike");
  const [age] = React.useState(32);

  return (
    <section>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
    </section>
  );
}
