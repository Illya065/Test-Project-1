import React from "react";
import { connect } from "react-redux";
import { timeToState } from "../../../_redux/trackerReducer";

class Time extends React.Component {
  render() {
    this.props.timeToState(
      this.props.sec,
      this.props.min,
      this.props.hour,
      this.props.id
    );
    return (
      <div
        key={this.props.id}
        className={`item__time ${this.props.id}`}
      >{`${this.props.hourState} : ${this.props.minState} : ${this.props.secState}`}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const TimeContainer = connect(mapStateToProps, { timeToState })(Time);

export default TimeContainer;
