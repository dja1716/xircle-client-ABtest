import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { GlobalStyles, AppContainer } from "./Styles";
import FeedPage from "./pages/feed/FeedPage";
import RequestPage from "./pages/RequestPage";
import PlacePage from "./pages/post/PlacePage";
import routes from "./Routes";

function App() {
  return (
    <div>
      <GlobalStyles />
      <AppContainer>
        <Router>
          <Switch>
            <Route path={routes.feed}>
              <FeedPage />
            </Route>
            <Route path={routes.place}>
              <PlacePage />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </div>
  );
}

export default App;
