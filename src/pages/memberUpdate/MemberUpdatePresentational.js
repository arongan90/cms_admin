import React from 'react';
import styled from "styled-components";
import HeaderContent from "../../components/share/HeaderContent";
import colors from "../../styles/colors";
import Box from "@mui/material/Box";
import Button from "../../components/share/Button";

const Wrapper = styled.div`
  padding: 20px;
`;
const Table = styled.table`
  width: 100%;
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 2px solid ${colors.grayColor};
  background: ${colors.whiteColor};
`;
const Td = styled.td`
  height: 50px;
  padding: 10px;
  color: ${colors.deepDarkGrayColor};
  font-weight: bold;
  font-size: 18px;
  border-right: 1px solid ${colors.borderColor};
  border-bottom: 1px solid ${colors.borderColor};
  
  &:first-child {
    width: 180px;
  }
  &:last-child {
    border-right: none;
  }
`;
const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
`;
const SubText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.grayColor};
  padding: 5px 0 0 10px;
`;
const ButtonGroup = styled.div`
  padding: 20px;
  margin: 20px;
  text-align: right;
`;

const MemberUpdatePresentational = ({
                                        tabMenu,
                                        handleTabMenu,
                                        memberInfo,
                                        updateInputs,
                                        onChange,
                                        onCancel,
                                        onUpdate
                                    }) => {

    const { name, email, passwd, passwd2 } = updateInputs;

    return (
        <Box sx={{
            bgcolor: '#eaeff1',
            paddingBottom: 15,
            minHeight: '100vh'
        }}>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="회원 관리"
                tabList={["회원 정보 수정"]}
            />
            <Wrapper>
                <Table>
                    <tbody>
                        <tr>
                            <Td>이름</Td>
                            <Td>
                                <Input
                                    value={name}
                                    onChange={onChange}
                                    name="name"
                                    placeholder="이름을 입력해주세요."
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td>이메일 주소</Td>
                            <Td>
                                <Input
                                    value={email}
                                    onChange={onChange}
                                    name="email"
                                    placeholder="이메일 주소를 입력해주세요."
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td>비밀번호</Td>
                            <Td>
                                <Input
                                    value={passwd}
                                    onChange={onChange}
                                    name="passwd"
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요."
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td>비밀번호 확인</Td>
                            <Td>
                                <Input
                                    value={passwd2}
                                    onChange={onChange}
                                    name="passwd2"
                                    type="password"
                                    placeholder="비밀번호를 다시 입력해주세요."
                                />
                                <SubText>비밀번호를 입력하시면 새 비밀번호가 적용됩니다.</SubText>
                            </Td>
                        </tr>
                    </tbody>
                </Table>
                <ButtonGroup>
                    <Button
                        width={120}
                        height={45}
                        fontSize={18}
                        fontWeight={600}
                        bgColor={colors.whiteColor}
                        border={`1px solid ${colors.activeBlue}`}
                        fontColor={colors.activeBlue}
                        margin="0 20px 0 0"
                        title="취소"
                        onClick={onCancel}
                    />
                    <Button
                        width={120}
                        height={45}
                        fontSize={18}
                        fontWeight={600}
                        bgColor={colors.activeBlue}
                        fontColor={colors.whiteColor}
                        title="수정"
                        onClick={onUpdate}
                    />
                </ButtonGroup>
            </Wrapper>
        </Box>
    )
}

export default MemberUpdatePresentational;