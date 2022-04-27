import logo from "./logo-aki.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>

        <footer className="App-footer">
          <small>coded by Aki Koide</small>
        </footer>
      </div>
    </div>
  );
}
