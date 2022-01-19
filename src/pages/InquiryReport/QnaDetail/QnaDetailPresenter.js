import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import {TableBody, TableCell, TableRow} from "@mui/material";
import Table from "@mui/material/Table";
import WysiwygEditor from "../../../components/share/WysiwygEditor";
import Button from "../../../components/share/Button";

const Wrapper = styled.div`
  max-width: 1550px;
  padding: 20px 20px 100px;
`;
const TableBox = styled.div`
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  
  td {
    padding: 12px 16px !important;
    vertical-align: top;
  }
  
  td:first-child {
    width: 160px;
    font-weight: 600;
    border-right: 1px solid ${colors.borderColor};
  }
  
  tr:last-child td:last-child {
    padding: 0 !important;
  }
`;
const Row = styled.div`
  white-space: pre-Wrap;
  word-break: keep-all;
  color: ${({ fontColor }) => fontColor ? fontColor : colors.deepDarkGrayColor};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
  margin: ${({ margin }) => margin ? margin : 0};
  cursor: ${({ cursor }) => cursor ? cursor : "default"};
`;
const ButtonGroup = styled.div`
  margin: 40px 20px;
  text-align: right;
`;

const QnaDetailPresenter = ({
                                tabMenu,
                                handleTabMenu,

                                editorState,
                                onEditorStateChange,
                                editorToHtml,

                                onCancel,
                                onComplete,
                            }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="문의/신고"
                tabList={["온라인 문의"]}
            />
            <Wrapper>
                <TableBox>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>문의자</TableCell>
                                <TableCell>{"홍길동"}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>문의일</TableCell>
                                <TableCell>{"2021.02.15"}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>문의 내용</TableCell>
                                <TableCell>
                                    <Row fontColor={colors.lightBlack} fontWeight={600}>
                                        {"카카오계정이 변경되었어요."}
                                    </Row>
                                    <Row margin="15px 0">
                                        {"카카오계정 변경 또는 카카오계정 정지 등으로 인해 기존에 로그인 시 사용하던 카카오계정을 이용하지 못할 경우에는 새로운 카카오계정으로 가입하여 계정 복구를 접수 부탁드립니다."}
                                    </Row>
                                    <Row fontColor={colors.activeBlue} cursor="pointer">
                                        {"plus(2).png"}
                                    </Row>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>답변</TableCell>
                                <TableCell>
                                    <WysiwygEditor
                                        height={400}
                                        editorState={editorState}
                                        onEditorStateChange={onEditorStateChange}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableBox>
                <ButtonGroup>
                    <Button
                        title="취소"
                        width={120}
                        height={38}
                        fontColor={colors.darkBlueColor}
                        border={`1px solid ${colors.darkBlueColor}`}
                        bgColor={colors.whiteColor}
                        fontSize={16}
                        fontWeight={600}
                        onClick={onCancel}
                    />
                    <Button
                        title="답변완료"
                        margin="0 0 0 15px"
                        width={120}
                        height={38}
                        fontColor={colors.whiteColor}
                        bgColor={colors.darkBlueColor}
                        fontSize={16}
                        fontWeight={600}
                        onClick={onComplete}
                    />
                </ButtonGroup>
            </Wrapper>
        </ContentBox>
    )
}

export default QnaDetailPresenter;