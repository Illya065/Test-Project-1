import React from "react";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  let arr = Object.values(props.itemList).map((i) => (
    <ListItem
      isActive={i.isActive}
      delete={i.delete}
      name={i.name}
      time={i.time}
      setState={props.setState}
      deleteItem={props.deleteItem}
      id={i.id}
    />
  ));
  //   let items = props.itemList.map((i) => (
  //     <ListItem
  //       isActive={i.isActive}
  //       name={i.name}
  //       time={i.time}
  //       setState={props.setState}
  //       id={i.id}
  //     />
  //   ));

  return <ul className="list">{arr.reverse()}</ul>;
};

export default List;
