import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import user from "./user";
import patient from "./patient";

export default combineReducers({ user, patient, visibilityFilter });
