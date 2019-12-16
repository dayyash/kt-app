import { combineReducers } from "redux";
import clientReducer from "./Client";

const appReducer = combineReducers({
  client: clientReducer
});

export default appReducer;
