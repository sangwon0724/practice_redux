import { createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

//action
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

//reducer
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload)
});

//createStore
const store = configureStore({ reducer });

export const actionCreators = {
    addToDo,
    deleteToDo
  };

export default store;