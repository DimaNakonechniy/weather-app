import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { generateWeatherInfoArray } from "helpers/weather";

const WeatherInfoTable = ({ data }: any) => (
  <div>
    <Typography variant="h6" align="center">
      Weather in {data.name}, {data.sys.country}
    </Typography>

    <Table>
      <TableBody>
        {generateWeatherInfoArray(data).map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default WeatherInfoTable;
