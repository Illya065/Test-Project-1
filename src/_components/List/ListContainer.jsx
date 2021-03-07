import React from "react";
import List from "./List";
import { connect } from "react-redux";
import { deleteItem, setState, timeToState } from "../../_redux/trackerReducer";

const mapDispatchToProps = (state) => {
  return {
    itemList: state.trackerPage.itemList,
    text: state.trackerPage.text,
  };
};

const ListContainer = connect(mapDispatchToProps, {
  setState,
  deleteItem,
  timeToState,
})(List);

export default ListContainer;
