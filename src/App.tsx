import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { SearchForm } from "components";

const App = () => (
  <Container maxWidth="sm">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1">
          Weather App
        </Typography>
      </Toolbar>
    </AppBar>

    <Card>
      <CardContent>
        <SearchForm />
      </CardContent>
    </Card>
  </Container>
);

export default App;
