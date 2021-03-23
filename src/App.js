import "./Normalize.css";
import "./App.css";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Videos from "./components/Videos";
import Stories from "./components/Stories";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Cover />
        <Videos />
        <Stories />
      </main>
    </div>
  );
}

export default App;
