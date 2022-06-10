import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const App = () => (
  <Container maxWidth="sm">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1">
          Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  </Container>
);

export default App;
