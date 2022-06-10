import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { SearchForm } from "../SearchForm";

const MainLayout = () => (
  <>
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
  </>
);

export default MainLayout;
