import { Box } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Create from "./components/Create/Create.js";
import Details from "./components/Details/Details.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Update from "./components/Update/Update.js";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/create" component={Create} />
          <Route path="/update" component={Update} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
