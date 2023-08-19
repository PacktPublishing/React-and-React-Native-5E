import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function MyApp() {
  const textStyle = {
    backgroundColor: "#cfe8fc",
    margin: 1,
    textAlign: "center",
  };

  return (
    <>
      <Container maxWidth="sm">
        <Typography sx={textStyle}>sm</Typography>
      </Container>
      <Container maxWidth="md">
        <Typography sx={textStyle}>md</Typography>
      </Container>
      <Container maxWidth="lg">
        <Typography sx={textStyle}>lg</Typography>
      </Container>
    </>
  );
}
