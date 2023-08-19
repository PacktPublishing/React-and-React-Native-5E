import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import ListItemButton from "@mui/material/ListItemButton";

const links = [
  { url: "/first", name: "First Page" },
  { url: "/second", name: "Second Page" },
  { url: "/third", name: "Third Page" },
];

export default function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = ({ type, key }: { type?: string; key?: string }) => {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }

    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List component="nav">
            {links.map((link) => (
              <NavLink
                key={link.url}
                to={link.url}
                style={{ color: "black", textDecoration: "none" }}
              >
                {({ isActive }) => (
                  <ListItemButton selected={isActive}>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                )}
              </NavLink>
            ))}
          </List>
        </div>
      </Drawer>
    </BrowserRouter>
  );
}
