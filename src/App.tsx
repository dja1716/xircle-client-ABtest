import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { GlobalStyles, AppContainer } from "./Styles";
import PlacesPage from "./pages/feed/PlacesPage";
import RequestPage from "./pages/RequestPage";
import PlacePage from "./pages/place/PlacePage";
import routes from "./Routes";
import FriendsPage from "./pages/friends/FriendsPage";
import MyPage from "./pages/mypage/MyPage";
import BookingPage from "./pages/place/BookingPage";
import BookingConfirmPage from "./pages/place/BookingConfirmPage";
import MyXirclePage from "./pages/mypage/MyXirclePage";
import ModifyProfilePage from "./pages/mypage/ModifyProfilePage";
import AuthPage1 from "./pages/auth/AuthPage1";
import AuthPage2 from "./pages/auth/AuthPage2";
import AuthPage3 from "./pages/auth/AuthPage3";
import AuthPage4 from "./pages/auth/AuthPage4";

function App() {
  return (
    <div>
      <GlobalStyles />
      <AppContainer>
        <Router>
          <Switch>
            <Route path={routes.places}>
              <PlacesPage />
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
            <Route path={routes.myxirclepage}>
              <MyXirclePage />
            </Route>
            <Route path={routes.myprofilemodifypage}>
              <ModifyProfilePage />
            </Route>
            <Route path={routes.auth1}>
              <AuthPage1 />
            </Route>
            <Route path={routes.auth2}>
              <AuthPage2 />
            </Route>
            <Route path={routes.auth3}>
              <AuthPage3 />
            </Route>
            <Route path={routes.auth4}>
              <AuthPage4 />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </div>
  );
}

export default App;
