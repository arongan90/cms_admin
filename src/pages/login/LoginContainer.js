import React, { useState } from 'react';
import LoginPresentational from "./LoginPresentational";
import { useDispatch } from "react-redux";
import { isLogin } from "../../modules/auth";
import {useHistory} from "react-router-dom";


const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("");
    const [loginInputs, setLoginInputs] = useState({
       userId: '',
       password: '',
    });

    const { userId, password } = loginInputs;

    const onInputsChange = e => {
        const { name, value } = e.target;
        setLoginInputs({
            ...loginInputs,
            [name]: value,
        });
    }

    const onSubmit = () => {
        if (userId === '' || password === '') {
            alert('아이디와 비밀번호를 정확히 입력해주세요.');
        } else {
            dispatch(isLogin({
                userId: userId,
                password: password
            }));
            history.push('/');
        }
    }

    return (
        <LoginPresentational
            loginInputs={loginInputs}
            onInputsChange={onInputsChange}
            onSubmit={onSubmit}
            errorMsg={errorMsg}
        />
    )
}

export default LoginContainer;