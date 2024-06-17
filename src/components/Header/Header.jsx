import React from "react";
import "./Header.css"
import logo from "../img/logo.png";
const Header = () => {
	return (
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
	)
}

export default Header;