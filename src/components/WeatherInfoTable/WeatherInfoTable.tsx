import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { WeatherInfo } from "types";

import { generateWeatherInfoArray } from "helpers/weather";

type WeatherInfoTableProps = {
  weatherData: WeatherInfo;
};

const WeatherInfoTable = ({ weatherData }: WeatherInfoTableProps) => (
  <div>
    <Typography variant="h6" align="center">
      Weather in {weatherData.name}, {weatherData.sys.country}
    </Typography>

    <Table>
      <TableBody>
        {generateWeatherInfoArray(weatherData).map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">
              <Typography color="secondary">{row.value}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default WeatherInfoTable;
