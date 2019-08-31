import { combineReducers } from "redux";
import quoteReducer from "./quoteReducer";
import authReducer from "./authReducer";

export default combineReducers({
  quote: quoteReducer,
  auth: authReducer
});
