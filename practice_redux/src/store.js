import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

//action
const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

//action
const deleteToDo = id => {
  return {
    type: DELETE,
    id: parseInt(id)
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state]; //id 생성
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

//createStore
const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
  };

export default store;