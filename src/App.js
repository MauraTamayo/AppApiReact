import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RoutesGlobal from "./Components/Routes/RoutesGlobal";
import Layout from "./Components/Content/Layout";

const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: "#d57d84",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#111111',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <RoutesGlobal/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
