import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 11,
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          marginLeft: 15,
          marginRight: 15,
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu anchorEl={document.body} open={true}>
        <MenuItem>First Item</MenuItem>
        <MenuItem>Second Item</MenuItem>
        <MenuItem>Third Item</MenuItem>
      </Menu>
    </ThemeProvider>
  );
}
