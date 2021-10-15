import {Cookies} from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name, value, option) => {
    let date = new Date(Date.now() + 24 * 60 * 60 * 1000);

    return cookie.set(name, value, {
        path: '/',
        expires: date,
        ...option
    });
}

export const getCookie = name => {
    return  cookie.get(name);
}

export const removeCookie = name => {
    let date = new Date(Date.now());

    cookie.remove(name, {
        expires: date,
        maxAge: 0,
    });
}
