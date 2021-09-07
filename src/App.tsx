import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalStyles, AppContainer } from "./Styles";
import FeedPage from "./pages/feed/FeedPage";
import RequestPage from "./pages/RequestPage";
import PostPage from "./pages/post/PostPage";

function App() {
  return (
    <div>
      <GlobalStyles />
      <AppContainer>
        <PostPage></PostPage>
      </AppContainer>
    </div>
  );
}

export default App;
