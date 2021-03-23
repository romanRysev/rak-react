import "./Normalize.css";
import "./App.css";
import Header from "./components/Header";
import Cover from "./components/Cover";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Cover />
      </main>
    </div>
  );
}

export default App;
