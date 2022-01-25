import axios from "axios";

export const SET_ICO_INFO = "SET_ICO_INFO";

export const setIcoInfo = icoInfo => dispatch => dispatch({ type: SET_ICO_INFO, icoInfo });

const initialState = {};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case SET_ICO_INFO:
            return { ...action.icoInfo }
        default:
            return state;
    }
}



