import "./Normalize.css";
import "./App.css";
import Policy from "./pages/Policy";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Stories from "./pages/Stories";
import ModalWindow from "./components/ModalWindow";

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
      <ModalWindow />
    </div>
  );
}

export default App;
