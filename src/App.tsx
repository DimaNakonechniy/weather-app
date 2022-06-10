import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import theme from "theme";

import { SearchForm } from "components";

const App = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper elevation={5}>
        <SearchForm />
      </Paper>
    </Container>
  </ThemeProvider>
);

export default App;
