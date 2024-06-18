import React from "react";
import h from "./Header.module.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={h.header}>
      <Link to="/content" className={h.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <nav className={h.navegator}>
        <div className={h.nav}>
          <Link to="/content" className={h.link + " " + h.active}>
            Главная
          </Link>
          <Link to="/novosti" className={h.link}>
            Новости
          </Link>
          <Link to="/pedagog" className={h.link}>
            Педагоги
          </Link>
          <Link to="/galer" className={h.link}>
            Галерея
          </Link>
          <Link to="/contakt" className={h.link}>
            Контакты
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
