import React from "react";
import List from "./List";
import { connect } from "react-redux";
import { setState } from "../../_redux/trackerReducer";

const mapDispatchToProps = (state) => {
  return {
    itemList: state.trackerPage.itemList,
  };
};

const ListContainer = connect(mapDispatchToProps, { setState })(List);

export default ListContainer;
