import React from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors.js";
import AddAdmin from "./AddAdmin";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IosSwitch from "../../share/IosSwitch";
import Button from "../../share/Button";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ChangePwdModal from "../../share/ChangePwdModal";

const Wrapper = styled.div`
  width: 1000px;
  height: 650px;
  margin: 10% auto;
  border-radius: 10px;
  padding: 10px 20px;
  background: ${colors.whiteColor};
`;
const AddTable = styled.table`
  width: 100%;
  border-top: 2px solid ${colors.darkGrayColor};
  border-bottom: 2px solid ${colors.darkGrayColor};
  background: ${colors.whiteColor};
`;
const TableDataCell = styled.td`
  padding: ${({padding}) => padding ? padding : '10px'};
  border-bottom: 1px solid ${colors.borderColor};
  border-right: 1px solid ${colors.borderColor};

  &:first-child {
    width: 13%;
    background: ${colors.ultraLightGray};
  }

  &:last-child {
    border-right: none;

  }

  .css-1vgzwi7-MuiFormControl-root {
    margin: 0;
  }
`;
const Title = styled.div`
  margin: 10px 0 20px;
  padding: 0 10px;
  font-size: 24px;
  font-weight: 600;
`;
const Input = styled.input`
  width: ${({width}) => width}px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid ${colors.borderColor};
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 30px 0;
`;
const PasswdText = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-left: 20px;
  text-decoration: underline;
  text-underline-position: under;
  color: ${colors.textFieldBlue};
  cursor: pointer;
`;

const UpdateAdmin = ({
                         gilad,
                         jason,
                         antoine,
                         handleChange,
                         handleUpdateModalClose,
                         changePwdOpen,
                         handleChangePwdOpen,
                         handleChangePwdClose,
                         handleMemberDelete,
                         updateAdminData,
                     }) => {
    return (
        <Wrapper>
            <Title>관리자 계정 수정</Title>
            <AddTable>
                <tbody>
                <tr>
                    <TableDataCell>아이디</TableDataCell>
                    <TableDataCell>
                        <Input
                            width={250}
                            // value={}
                            // onChange={}
                            placeholder="아이디를 입력해주세요."/>
                    </TableDataCell>
                </tr>
                <tr>
                    <TableDataCell>이름</TableDataCell>
                    <TableDataCell>
                        <Input
                            width={220}
                            // value={}
                            // onChange={}
                            placeholder="이름을 입력해주세요."/>
                    </TableDataCell>
                </tr>
                <tr>
                    <TableDataCell>비밀번호</TableDataCell>
                    <TableDataCell>
                        <Input
                            width={300}
                            // value={}
                            // onChange={}
                            placeholder="비밀번호를 입력해주세요."/>
                        <PasswdText onClick={handleChangePwdOpen}>
                            비밀번호 변경
                        </PasswdText>
                    </TableDataCell>
                </tr>
                <tr>
                    <TableDataCell>권한</TableDataCell>
                    <TableDataCell padding="5px 10px">
                        <Box sx={{display: 'flex'}}>
                            <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={gilad} onChange={handleChange} name="gilad"/>
                                        }
                                        label="전체"
                                    />
                                </FormGroup>
                            </FormControl>
                            <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={gilad} onChange={handleChange} name="gilad"/>
                                        }
                                        label="회원관리"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={jason} onChange={handleChange} name="jason"/>
                                        }
                                        label="상품"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={antoine} onChange={handleChange} name="antoine"/>
                                        }
                                        label="메일링"
                                    />
                                </FormGroup>
                            </FormControl>
                            <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={gilad} onChange={handleChange} name="gilad"/>
                                        }
                                        label="ICO"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={jason} onChange={handleChange} name="jason"/>
                                        }
                                        label="고객센터"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={antoine} onChange={handleChange} name="antoine"/>
                                        }
                                        label="이용현황"
                                    />
                                </FormGroup>
                            </FormControl>
                            <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={gilad} onChange={handleChange} name="gilad"/>
                                        }
                                        label="암호화폐"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={jason} onChange={handleChange} name="jason"/>
                                        }
                                        label="문의/신고"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={jason} onChange={handleChange} name="jason"/>
                                        }
                                        label="거래소"
                                    />
                                </FormGroup>
                            </FormControl>
                            <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={gilad} onChange={handleChange} name="gilad"/>
                                        }
                                        label="설정"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Box>
                    </TableDataCell>
                </tr>
                <tr>
                    <TableDataCell>특별 권한</TableDataCell>
                    <TableDataCell padding="5px 10px">
                        <Box sx={{display: 'flex'}}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={gilad} onChange={handleChange} name="gilad"/>
                                }
                                label="회원관리"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={jason} onChange={handleChange} name="jason"/>
                                }
                                label="상품"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine"/>
                                }
                                label="메일링"
                            /><FormControlLabel
                                control={
                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine"/>
                                }
                                label="메일링"
                            />
                        </Box>
                    </TableDataCell>
                </tr>
                <tr>
                    <TableDataCell>로그인 제한</TableDataCell>
                    <TableDataCell padding="5px 15px">
                        <IosSwitch/>
                    </TableDataCell>
                </tr>
                </tbody>
            </AddTable>
            <ButtonGroup>
                <Button
                    width={120}
                    height={40}
                    title="삭 제"
                    fontSize={16}
                    fontWeight={600}
                    fontColor={colors.activePink}
                    bgColor={colors.whiteColor}
                    border={`1px solid ${colors.activePink}`}
                    onClick={handleMemberDelete}
                />
                <Button
                    width={120}
                    height={40}
                    fontSize={16}
                    fontWeight={600}
                    title="수 정"
                    fontColor={colors.whiteColor}
                    bgColor={colors.textFieldBlue}
                />
            </ButtonGroup>


            <ChangePwdModal
                open={changePwdOpen}
                onClose={handleChangePwdClose}
            />

        </Wrapper>
    )
}

export default UpdateAdmin;

// textFieldBlue