import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  console.log("execute Home");
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps - Home");
  console.log(state);
  return { toDos: state }; 
} //Home의 인자중 toDos


function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps - Home");
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
} //Home의 인자중 addToDo

export default connect(mapStateToProps, mapDispatchToProps)(Home);