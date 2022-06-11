import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useWeather } from "hooks";

import { SearchForm, WeatherInfoTable, WeatherMap } from "components";

const MainLayout = () => {
  const [search, setSearch] = useState<string>("");

  const { data } = useWeather(search);

  const handleSearchSubmit = (value: string) => {
    setSearch(value);
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
        <SearchForm value={search} onSubmit={handleSearchSubmit} />
      </Paper>

      {data?.name && (
        <Paper elevation={5}>
          <Box pt={2}>
            <WeatherInfoTable weatherData={data} />
            <WeatherMap data={data} />
          </Box>
        </Paper>
      )}
    </>
  );
};

export default MainLayout;
