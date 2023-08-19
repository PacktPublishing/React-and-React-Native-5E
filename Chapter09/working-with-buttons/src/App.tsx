import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AndroidIcon from "@mui/icons-material/Android";
import Stack from "@mui/material/Stack";

type ButtonColor = "primary" | "secondary";

export default function App() {
  const [color, setColor] = useState<ButtonColor>("secondary");

  const updateColor = () => {
    setColor(color === "secondary" ? "primary" : "secondary");
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color={color} onClick={updateColor}>
        Contained
      </Button>

      <Button color={color} onClick={updateColor}>
        Text
      </Button>

      <Button variant="outlined" color={color} onClick={updateColor}>
        Outlined
      </Button>

      <IconButton color={color} onClick={updateColor}>
        <AndroidIcon />
      </IconButton>
    </Stack>
  );
}
