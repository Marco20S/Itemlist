import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import addItemReducer from "./ItemsReducer";

const rootReducer = combineReducers({
  items: addItemReducer,
  // other reducers can be added here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;