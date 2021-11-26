// import { Box } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppWithRouterAccess from "./AppWithRouterAccess";
import ContextProvider from "./Context/ContextProvider";
// import Create from "./components/Create/Create.js";
// import Details from "./components/Details/Details.js";
// import Header from "./components/Header/Header.js";
// import Home from "./components/Home/Home.js";
// import Update from "./components/Update/Update.js";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppWithRouterAccess />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
