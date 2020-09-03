/** @format */

import React, { useState } from "react";
import "./App.css";
import Display from "./display";

const App = () => {
  const [List, setList] = useState("");
  const [arraylist, setArrayList] = useState([]);

  const update_list = (event) => {
    console.log(event.target.value);
    setList(event.target.value);
  };

  const arryupdate = () => {
    setArrayList((pre) => {
      return [...pre, List];
    });
    setList("");
  };

  const deleteitem = (id) => {
    //this id is geting form display.js on which it clicked
    setArrayList((pre) => {
      return pre.filter((arrElem, i) => {
        return i !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="sub_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input
          type="text"
          placeholder="enter the todo"
          onChange={update_list}
          value={List}
        ></input>
        <i className="fas fa-plus-circle" onClick={arryupdate}></i>

        <div className="todo_style">
          <ol>
            {arraylist.map((item, i) => {
              return (
                <Display
                  text={item}
                  index={i}
                  id={i} //to determine which text you clicked
                  delete={deleteitem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
