import "./Normalize.css";
import "./App.css";
import Policy from "./pages/Policy";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Stories from "./pages/Stories";
import ModalWindowWrap from "./components/ModalWindowWrap";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  const cards = [
    {
      title: "card1",
      text: "card1 text",
      href: "#",
      img: "/images/card1.jpeg",
    },
    {
      title: "card2",
      text: "card2 text",
      href: "#",
      img: "/images/card2.jpeg",
    },
    {
      title: "card3",
      text: "card3 text",
      href: "#",
      img: "/images/card1.jpeg",
    },
    {
      title: "card4",
      text: "card4 text",
      href: "#",
      img: "/images/card2.jpeg",
    },
    {
      title: "card5",
      text: "card5 text",
      href: "#",
      img: "/images/card1.jpeg",
    },
    {
      title: "card6",
      text: "card6 text",
      href: "#",
      img: "/images/card2.jpeg",
    },
    {
      title: "card7",
      text: "card7 text",
      href: "#",
      img: "/images/card1.jpeg",
    },
    {
      title: "card8",
      text: "card8 text",
      href: "#",
      img: "/images/card2.jpeg",
    },
  ];

  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main cards={cards} />
            </Route>
            <Route path="/stories">
              <Stories cards={cards} />
            </Route>
            <Route path="/policy">
              <Policy />
            </Route>
          </Switch>
        </BrowserRouter>
        <ModalWindowWrap />
      </div>
    </Provider>
  );
}

export default App;
