import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { GlobalStyles, AppContainer } from "./Styles";
import FeedPage from "./pages/feed/FeedPage";
import RequestPage from "./pages/RequestPage";
import PlacePage from "./pages/place/PlacePage";
import routes from "./Routes";
import FriendsPage from "./pages/friends/FriendsPage";
import MyPage from "./pages/mypage/MyPage";
import BookingPage from "./pages/place/BookingPage";
import BookingConfirmPage from "./pages/place/BookingConfirmPage";

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
            <Route path={routes.friends}>
              <FriendsPage />
            </Route>
            <Route path={routes.mypage}>
              <MyPage />
            </Route>
            <Route path={routes.booking}>
              <BookingPage />
            </Route>
            <Route path={routes.bookingconfirm}>
              <BookingConfirmPage />
            </Route>
            <Route path={routes.request}>
              <RequestPage />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </div>
  );
}

export default App;
