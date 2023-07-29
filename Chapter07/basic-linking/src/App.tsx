import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/first",
        element: <First />,
      },
      {
        path: "/second",
        element: <Second />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
