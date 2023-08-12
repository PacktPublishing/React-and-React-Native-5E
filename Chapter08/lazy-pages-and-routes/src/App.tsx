import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { FadeLoader } from "react-spinners";

const First = React.lazy(() => import("./First"));
const Second = React.lazy(() => import("./Second"));

function Layout() {
  return (
    <section>
      <nav>
        <span>
          <Link to="first">First</Link>
        </span>
        <span> | </span>
        <span>
          <Link to="second">Second</Link>
        </span>
      </nav>
      <section>
        <React.Suspense fallback={<FadeLoader color={"lightblue"} />}>
          <Outlet />
        </React.Suspense>
      </section>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Route>
      </Routes>
    </Router>
  );
}
