import { combineReducers } from "redux";
import auth, { IS_LOGIN, IS_LOGOUT, SET_TOKEN } from "./auth";
import navigator, { RESET_CATEGORY, SET_CATEGORY } from "./navigator";
import {filterActions} from "redux-ignore";

const rootReducer = combineReducers({
    auth: filterActions(auth, [IS_LOGIN, IS_LOGOUT, SET_TOKEN]),
    navigator: filterActions(navigator, [SET_CATEGORY, RESET_CATEGORY])
});

export default rootReducer;
