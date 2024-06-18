import React from "react";
import n from "./Novosti.module.css";
const NovostItem = (props) => {
  return <div className={n.novost}>{props.name}</div>;
};
const Novosti = (props) => {
  return (
    <div className={n.novosti}>
      {props.state.map((item) => {
        return <NovostItem name={item.name} />;
      })}
    </div>
  );
};

export default Novosti;
