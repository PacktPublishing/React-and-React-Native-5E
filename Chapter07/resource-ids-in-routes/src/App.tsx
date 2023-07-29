import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersContainer from "./UsersContainer";
import UserContainer from "./UserContainer";
import { fetchUser } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersContainer />,
    errorElement: <p>Route not found</p>,
  },
  {
    path: "/users/:id",
    element: <UserContainer />,
    errorElement: <p>User not found</p>,
    loader: async ({ params }) => {
      const user = await fetchUser(Number(params.id));
      return { user };
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
