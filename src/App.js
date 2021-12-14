import React, {useState} from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RoutesGlobal from "./Components/Routes/RoutesGlobal";
import Layout from "./Components/Content/Layout";
import GlobalContext from "./Context/GlobalContext";

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
  const [favoriteList, setFavoriteList] = useState([])

  let value = {
    favoriteList:favoriteList,
    setFavoriteList:setFavoriteList
  }
  
  return (
    <GlobalContext.Provider value={value}>
    <ThemeProvider theme={theme}>
      <Layout>
        <RoutesGlobal/>
      </Layout>
    </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
