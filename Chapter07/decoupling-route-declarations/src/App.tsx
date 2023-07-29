import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import routeOne from "./one";
import routeTwo from "./two";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <p>Nesting Routes</p>,
      },
      routeOne,
      routeTwo,
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
