import React from 'react';
import styled from "styled-components";
import IosSwitch from "../../share/IosSwitch";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import colors from "../../../styles/colors";
import Button from "../../share/Button";

const Wrapper = styled.div`
  width: 1200px;
  margin: 50px auto;
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
  }

  &:last-child {
    border-right: none;

  }

  .css-1vgzwi7-MuiFormControl-root {
    margin: 0;
  }
`;
const Input = styled.input`
  width: ${({width}) => width}px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid ${colors.borderColor};
`;
const ButtonGroup = styled.div`
  padding: 20px;
  margin: 30px 0;
  text-align: center;
`;

const AddAdmin = ({gilad, jason, antoine, handleChange}) => {
    return (
        <Wrapper>
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
                        </TableDataCell>
                    </tr>
                    <tr>
                        <TableDataCell>비밀번호 확인</TableDataCell>
                        <TableDataCell>
                            <Input
                                width={300}
                                // value={}
                                // onChange={}
                                placeholder="비밀번호를 다시 한번 입력해주세요."/>
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
                    height={38}
                    title="취소"
                    fontColor={colors.darkBlueColor}
                    bgColor={colors.whiteColor}
                    border={`1px solid ${colors.darkBlueColor}`}
                />
                <Button
                    width={120}
                    height={38}
                    title="추가"
                    margin="0 0 0 20px"
                    fontColor={colors.whiteColor}
                    bgColor={colors.darkBlueColor}
                />
            </ButtonGroup>
        </Wrapper>
    )
}

export default AddAdmin;