import React from 'react';
import styled from "styled-components";
import colors from "../../styles/colors.js";
import TextField from '@mui/material/TextField';
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
const Title = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: 700;
  color: ${colors.darkBlueColor};
  text-align: center;
  padding: 20px 0;
  margin: 0 0 30px;
`;
const InputBox = styled(TextField)`
  margin-bottom: 20px !important;
  width: 100%;

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.textFieldBlue};
  }
`;
const ErrorText = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 2.5;
  color: ${colors.activeRed};
`;
const ErrorMsgBox = styled.div`
  height: 35px;
  
`;
const SubTitle = styled.div`
  width: 100%;
  text-align: left;
  font-size: 16px;
  color: ${colors.darkGrayColor};
`;

const LoginPresentation = ({
                                 loginInputs,
                                 onInputsChange,
                                 onSubmit,
                                 errorMsg
                             }) => {
    return (
        <Wrapper>
            <LoginForm>
                <Title>
                    CMS 관리자
                </Title>
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
                    onKeyUp={e => e.key === "Enter" && onSubmit()}
                />
                <ErrorMsgBox>
                    {errorMsg && (<ErrorText>&#8252; {errorMsg}</ErrorText>)}
                </ErrorMsgBox>
                <LongButton
                    height={56}
                    fontSize={20}
                    bgColor={colors.loginPoint}
                    margin="20px 0"
                    title="로 그 인"
                    onClick={onSubmit}
                />
                <SubTitle>
                    계정 문의: 02-345-6789 (내선번호: 123)
                </SubTitle>
            </LoginForm>
        </Wrapper>
    )
}

export default LoginPresentation;