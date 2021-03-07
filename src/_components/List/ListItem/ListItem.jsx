import React from "react";
import moment from "moment";
import { useStopwatch } from "react-timer-hook";
import TimeContainer from "./Time";

const ListItem = (props) => {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

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
        <TimeContainer
          sec={seconds}
          min={minutes}
          hour={hours}
          secState={props.secState}
          minState={props.minState}
          hourState={props.hourState}
          id={props.id}
        />
        <div onClick={changeState}>
          {props.isActive ? (
            <div className="item__stop" onClick={pause}></div>
          ) : (
            <div className="item__play" onClick={start}></div>
          )}
        </div>
        <div className="item__delete" onClick={deleteItem}></div>
      </div>
    </li>
  );
};

export default ListItem;
