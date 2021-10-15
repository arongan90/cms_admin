import axios from "axios";

export const IS_LOGIN = "IS_LOGIN";
export const IS_LOGOUT = "IS_LOGOUT";
export const SET_TOKEN = "SET_TOKEN";

export const isLogin = loginInfo => async dispatch => {
    try {
        const res = await axios.post('https://reqres.in/api/login', {
            email: loginInfo.userId,
            password: loginInfo.password
        });

        if (res.status === 200) {
            dispatch({type: IS_LOGIN, payload: res.data.token });
            localStorage.setItem("token", res.data.token);
            setTimeout(() => {
                window.location.reload();
            }, [1000]);
        }
    } catch(e) {
        throw new Error(e);
    }
}
export const isLogout = () => dispatch => {
    dispatch({ type: IS_LOGOUT });
    localStorage.removeItem("token");
    setTimeout(() => {
        window.location.reload();
    }, [1000]);
}
export const setToken = token => dispatch => dispatch({ type: SET_TOKEN, payload: token });

const initialState = {
    token: null,
    userInfo: null,
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case IS_LOGIN:
            return {
                ...state,
                token: action.payload
            }
        case IS_LOGOUT:
            return initialState;
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            }
        default:
            return state;
    }
}



