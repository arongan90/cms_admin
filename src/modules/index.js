import { combineReducers } from "redux";
import auth, { IS_LOGIN, IS_LOGOUT, SET_TOKEN } from "./auth";
import {filterActions} from "redux-ignore";

const rootReducer = combineReducers({
    auth: filterActions(auth, [IS_LOGIN, IS_LOGOUT, SET_TOKEN]),
});

export default rootReducer;
