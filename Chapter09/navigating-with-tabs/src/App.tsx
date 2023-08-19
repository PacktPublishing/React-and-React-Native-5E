import {
  Link,
  useLocation,
  matchPath,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "/page1",
        element: <Typography>Item One</Typography>,
      },
      {
        path: "/page2",
        element: <Typography>Item Two</Typography>,
      },
      {
        path: "/page3",
        element: <Typography>Item Three</Typography>,
      },
    ],
  },
]);

function RouteLayout() {
  const routeMatch = useRouteMatch(["/", "/page1", "/page2", "/page3"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Box>
      <Tabs value={currentTab}>
        <Tab label="Item One" component={Link} to="/page1" value="/page1" />
        <Tab label="Item Two" component={Link} to="/page2" value="/page2" />
        <Tab label="Item Three" component={Link} to="/page3" value="/page3" />
      </Tabs>
      <Outlet />
    </Box>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
