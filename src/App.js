import React from "react";
import logo from "./img/logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <a href="#">Главная</a>
          <a href="#">Новости</a>
          <a href="#">Педагоги</a>
          <a href="#">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
      </header>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
