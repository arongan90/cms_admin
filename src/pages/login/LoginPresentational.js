import React from 'react';
import styled from "styled-components";
import colors from "../../styles/colors.js";
import TextField from '@mui/material/TextField';
import unionLogo from "../../images/union_logo.svg";
import LongButton from "../../components/share/LongButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10%;
  background: ${colors.deepWhiteColor};
`;
const LoginForm = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${colors.borderColor};
  box-shadow: 0 0 10px ${colors.shadowColor};
`;
const LogoBox = styled.div`
  width: 180px;
  height: 70px;
  margin: 30px auto 70px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const InputBox = styled(TextField)`
  margin-bottom: 20px !important;
  width: 100%;

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.textFieldBlue};
  }
`;

const LoginPresentational = ({
                                 loginInputs,
                                 onInputsChange,
                                 onSubmit,
                             }) => {
    return (
        <Wrapper>
            <LoginForm>
                <LogoBox>
                    <Image src={unionLogo} />
                </LogoBox>
                <InputBox
                    label="ID"
                    variant="outlined"
                    name="userId"
                    value={loginInputs.userId}
                    onChange={onInputsChange}
                />
                <InputBox
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={loginInputs.password}
                    onChange={onInputsChange}
                />
                <LongButton
                    height={56}
                    fontSize={20}
                    bgColor={colors.loginPoint}
                    margin="30px 0 0"
                    title="로 그 인"
                    onClick={onSubmit}
                />
            </LoginForm>
        </Wrapper>
    )
}

export default LoginPresentational;