/** @format */

import React from "react";
import "./App.css";

const Display = (props) => {
  return (
    <div className="todo_style">
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          props.delete(props.id);
        }}
      />
      <li key={props.index}>{props.text}</li>
    </div>
  );
};

export default Display;
