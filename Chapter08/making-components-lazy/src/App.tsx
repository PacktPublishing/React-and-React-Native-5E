import * as React from "react";

const MyComponent = React.lazy(() => import("./MyComponent"));

function App() {
  return <MyComponent />;
}

export default App;
