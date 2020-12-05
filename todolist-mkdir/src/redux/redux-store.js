import thunkMiddleware from "redux-thunk";
import  toDoPage  from "./todo-reducer";
const { combineReducers, createStore, applyMiddleware } = require("redux");

const reducers = combineReducers({
    toDoPage
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));