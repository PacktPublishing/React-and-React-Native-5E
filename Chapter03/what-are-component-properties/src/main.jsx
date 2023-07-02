import * as ReactDOM from "react-dom/client";
import MyComponent from "./MyComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <section>
    <MyComponent
      title="Welcome to My App"
      description="This is a sample component."
    />
  </section>
);
