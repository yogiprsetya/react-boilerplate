import { combineReducers } from "redux";
import isLoading from "./Loading";
import auth from "./Auth";

export default combineReducers({
  isLoading,
  auth
});
