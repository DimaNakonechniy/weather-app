import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

import theme from "theme";

import { MainLayout } from "components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <MainLayout />
      </Container>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
