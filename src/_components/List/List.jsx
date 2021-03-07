import React from "react";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  let arr = Object.values(props.itemList).map((i) => {
    if (!i.delete) {
      return (
        <ListItem
          isActive={i.isActive}
          delete={i.delete}
          name={i.name}
          time={i.time}
          setState={props.setState}
          deleteItem={props.deleteItem}
          id={i.id}
          secState={i.sec}
          minState={i.minute}
          hourState={i.hour}
          timeToState={props.timeToState}
        />
      );
    }
  });

  return <ul className="list">{arr}</ul>;
};

export default List;
