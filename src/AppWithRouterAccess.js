import { Box } from "@material-ui/core";
import { Switch, Route, useHistory } from "react-router-dom";
import Create from "./components/Create/Create.js";
import Details from "./components/Details/Details.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Update from "./components/Update/Update.js";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Login from "./components/Account/Login";
import { oktaAuthConfig, oktaSignInConfig } from "./config";

const oktaAuth = new OktaAuth(oktaAuthConfig);

function AppWithRouterAccess() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <SecureRoute path="/" component={Header} />

      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={() => <Login config={oktaSignInConfig} />}
          />
          <Route path="/login/callback" component={LoginCallback} />
          <Route path="/details/:id" component={Details} />
          <Route path="/create" component={Create} />
          <Route path="/update/:id" component={Update} />
        </Switch>
      </Box>
    </Security>
  );
}

export default AppWithRouterAccess;
