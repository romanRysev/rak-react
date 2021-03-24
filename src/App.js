import "./Normalize.css";
import "./App.css";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Videos from "./components/Videos";
import Stories from "./components/Stories";
import Instagram from "./components/Instagram";
import TellYourStory from "./components/TellYourStory";
import Policy from "./components/Policy";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <main>
              <Cover />
              <Videos />
              <Stories />
              <Instagram />
              <TellYourStory />
            </main>
          </Route>
          <Route path="/stories">
            <Header />
            Stories
          </Route>
          <Route path="/policy">
            <Header />
            <Policy />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
