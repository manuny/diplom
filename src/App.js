import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Novosti from "./components/Novosti/Novosti";
import Pedagog from "./components/Pedagog/Pedagog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galer from "./components/Galer/Galer";
import Contakt from "./components/Contakt/Contakt";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/content" element={<Content />} />
          <Route path="/novosti" element={<Novosti state={props.state} />} />
          <Route path="/pedagog" element={<Pedagog />} />
          <Route path="/galer" element={<Galer />} />
          <Route path="/contakt" element={<Contakt />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
