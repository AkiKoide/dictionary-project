import logo from "./titlelogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" class="img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Japan" />
        </main>

        <footer className="App-footer">
          <small>
            This project was created by Aki Koide and is{" "}
            <a
              href="https://github.com/AkiKoide/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on github
            </a>
          </small>
          <br />
          <span>
            <a
              href="https://github.com/AkiKoide"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github fa-xl"></i>
            </a>
          </span>{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/aki-koide/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
