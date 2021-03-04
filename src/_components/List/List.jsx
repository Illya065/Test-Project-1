import React from "react";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  return (
    <ul className="list">
      <ListItem />

      <ListItem />

      <ListItem />
    </ul>
  );
};

export default List;
