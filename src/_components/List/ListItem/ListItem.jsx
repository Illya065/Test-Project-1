import React from "react";

const ListItem = (props) => {
  const changeState = () => {
    props.setState(!props.isActive, props.id);
  };

  const deleteItem = () => {
    props.deleteItem(!props.delete, props.id);
  };
  return (
    <li
      className={`${props.delete ? "d-none" : "item"} ${
        props.isActive ? "active" : "unactive"
      }`}
    >
      <div className="item__name">{props.name}</div>
      <div className="item__manage">
        <div className="item__time">{props.time}</div>
        <div
          className={props.isActive ? "item__stop" : "item__play"}
          onClick={changeState}
        ></div>
        <div className="item__delete" onClick={deleteItem}></div>
      </div>
    </li>
  );
};

export default ListItem;
