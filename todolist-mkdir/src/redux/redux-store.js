import thunkMiddleware from "redux-thunk";
import  toDoPage  from "./todo-reducer";
import toDoTasksPage from "./todoTasks-reducer";
const { combineReducers, createStore, applyMiddleware } = require("redux");

const reducers = combineReducers({
    toDoPage,
    toDoTasksPage
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));