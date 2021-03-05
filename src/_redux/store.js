import { applyMiddleware, combineReducers, createStore } from "redux";
import trackerReducer from "./trackerReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  trackerPage: trackerReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
