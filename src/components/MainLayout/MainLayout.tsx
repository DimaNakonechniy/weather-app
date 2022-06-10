import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { SearchForm } from "components";

const MainLayout = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchSubmit = () => {
    console.log(search);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper elevation={5}>
        <SearchForm
          value={search}
          onChange={setSearch}
          onSubmit={handleSearchSubmit}
        />
      </Paper>
    </>
  );
};

export default MainLayout;
