import React, { useState } from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";
import Button from "./Button";
import ChangePwdModal from "./ChangePwdModal";
// import UpdateAdmin from "../feature/Admin/UpdateAdmin";
// import {Modal} from "@material-ui/core";

const Wrapper = styled.div`
  max-width: 800px;
  height: 400px;
  border-radius: 10px;
  margin: 10% auto;
  padding: 30px 20px;
  background: ${colors.whiteColor};
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding: 0 10px;
  color: ${colors.deepNavyColor};
  margin: 10px 0 20px;
`;
const TableBox = styled.table`
  width: 100%;
  border-style: solid;
  border-width: 3px 0 2px 0;
  border-color: ${colors.darkGrayColor};
`;
const TableCell = styled.td`
  height: 55px;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid ${colors.borderColor};
  box-sizing: border-box;
  
  &:first-child {
    width: 140px;
    border-right: 1px solid ${colors.borderColor};
  }
`;
const InfoText = styled.span`
  font-weight: 500;
  color: ${colors.deepDarkGrayColor};
`;
const ChangeText = styled.span`
  color: ${colors.textFieldBlue};
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;

const MyInfo = ({ handleInfoClose }) => {
    const [changePwdOpen, setChangePwdOpen] = useState(false);
    const handlePwdOpen = () => setChangePwdOpen(true);
    const handlePwdClose = () => setChangePwdOpen(false);

    return (
        <Wrapper>
            <Title>관리자 정보</Title>
            <TableBox>
                <tbody>
                    <tr>
                        <TableCell>이름</TableCell>
                        <TableCell>
                            <InfoText>임꺽정</InfoText>
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>아이디</TableCell>
                        <TableCell>
                            <InfoText>Lim</InfoText>
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>비밀번호</TableCell>
                        <TableCell>
                            <ChangeText onClick={handlePwdOpen}>비밀번호 변경</ChangeText>
                        </TableCell>
                    </tr>
                </tbody>
            </TableBox>
            <Button
                width={120}
                height={40}
                title="닫기"
                margin="50px 0 30px 83%"
                fontSize={16}
                fontWeight={700}
                fontColor={colors.whiteColor}
                bgColor={colors.activeBlue}
                onClick={handleInfoClose}
            />


            <ChangePwdModal
                open={changePwdOpen}
                onClose={handlePwdClose}
            />
        </Wrapper>
    )
}

export default MyInfo;