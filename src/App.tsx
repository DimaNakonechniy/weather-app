import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

import theme from "theme";

import { MainLayout } from "components";

const App = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="sm">
      <MainLayout />
    </Container>
  </ThemeProvider>
);

export default App;
