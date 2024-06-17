import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Novosti from "./components/Novosti/Novosti";

function App() {
  return (
    <div className="App">
      <Header />
      <Novosti />

      <Footer />
    </div>
  );
}

export default App;
