import React from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../share/Button";

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-size: 24px;
  color: ${colors.lightBlack};
`;
const TableBox = styled.div`
  border-width: 2px 0 2px 0;
  border-color:${colors.borderColor};
  border-style: solid; 
`;
const Table = styled.table`
  
`;
const Td = styled.td`

`;
const Input = styled.input`

`;
const Select = styled.select`

`;

const ColumnTable = ({

                     }) => {
    return (
        <Wrapper>
            <TableBox>
                <Table>
                    <tbody>
                        <tr>
                            <Td>코인명</Td>
                            <Td>
                                <Input
                                    placeholder="코인명을 입력해주세요."
                                />
                            </Td>
                            <Td>화폐단위</Td>
                            <Td>
                                <Input
                                    placeholder="화폐단위를 입력해주세요."
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td>카테고리</Td>
                            <Td>
                                <Select>
                                    <option value="">일반</option>
                                    <option value="">DeFi</option>
                                    <option value="">NFT</option>
                                </Select>
                            </Td>
                            <Td>구분</Td>
                            <Td>
                                <Select>
                                    <option value="">일반</option>
                                    <option value="">DeFi</option>
                                    <option value="">NFT</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>초기 토큰가격</Td>
                            <Td>
                                <Select>
                                    <option value="">0.10</option>
                                    <option value="">0.11</option>
                                    <option value="">0.12</option>
                                </Select>
                            </Td>
                            <Td>분야</Td>
                            <Td>
                                <Select>
                                    <option>설정 > 암호화폐 범주에 따라 선택하게끔...</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>플랫폼</Td>
                            <Td>
                                <Input
                                    placeholder="플랫폼을 입력해주세요."
                                />
                            </Td>
                            <Td>상태</Td>
                            <Td>
                                <Select>
                                    <option value="">진행 중</option>
                                    <option value="">예정</option>
                                    <option value="">마감</option>
                                    <option value="">미정</option>
                                    <option value="">지연</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>시작일</Td>
                            <Td>
                                <Input
                                    placeholder="코인명을 입력해주세요."
                                />
                            </Td>
                            <Td>종료일</Td>
                            <Td>
                                <Input
                                    placeholder="화폐단위를 입력해주세요."
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td>하드캡</Td>
                            <Td>
                                <Input
                                    placeholder="코인명을 입력해주세요."
                                />
                            </Td>
                            <Td>소프트캡</Td>
                            <Td>
                                <Input
                                    placeholder="화폐단위를 입력해주세요."
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td>목표</Td>
                            <Td>
                                <Select>
                                    <option value="">USD</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </Select>
                            </Td>
                            <Td>판매용 토큰</Td>
                            <Td>g
                                <Select>
                                    <option value="">CRDN</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>웹사이트</Td>
                            <Td>
                                <Input
                                    placeholder="웹사이트의 url주소를 입력해주세요."
                                />
                            </Td>
                            <Td>승인</Td>
                            <Td>
                                <Select>
                                    <option value="">USD</option>
                                </Select>
                                <Button
                                    width={35}
                                    height={35}
                                    title="+"
                                    border={`1px solid ${colors.activeBlue}`}
                                    fontColor={colors.activeBlue}
                                    fontSize={20}
                                />
                            </Td>
                        </tr>
                    </tbody>
                </Table>
            </TableBox>
        </Wrapper>
    )
}

export default ColumnTable;