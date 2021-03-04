import React from "react";

const ListItem = (props) => {
  return (
    <li className="list__item item">
      <div className="item__name">No name tracker #1</div>
      <div className="item__manage">
        <div className="item__time">00:11:32</div>
        <div className="item__play"></div>
        <div className="item__delete"></div>
      </div>
    </li>
  );
};

export default ListItem;
