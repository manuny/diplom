import React from "react";
import s from "./Content.module.css";
import foto from "../img/2.jpg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className={s.content}>
      <div className="foto">
        <img src={foto} alt="foto" />
      </div>

      <h1>О нас </h1>
      <h2>Арт-студия Екатерины Вяткиной </h2>
      <ul>
        <li>
          <h3>Хореография</h3>
        </li>
        <li>
          <h3>Вокал</h3>
        </li>
        <li>
          <h3>Искусство</h3>
        </li>
      </ul>
      <p>
        ☆ 25 лет раскрываем таланты <br />
        ☆ Лучшее творческое обучение <br />
        ☆ Занятия для детей от 3-18 лет <br />☆ Онлайн-обучение
      </p>
      <Link to="/contakt">
        <button>Записаться</button>
      </Link>
    </div>
  );
};

export default Content;
