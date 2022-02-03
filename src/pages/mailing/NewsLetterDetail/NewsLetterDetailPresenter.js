import React from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import WysiwygEditor from "../../../components/share/WysiwygEditor";
import HeaderContent from "../../../components/share/HeaderContent";
import Table from "@mui/material/Table";
import {TableBody, TableCell, TableRow} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {ko} from "date-fns/locale";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
  min-height: calc(100vh - 144px);
`;
const ButtonGroup = styled.div`
  min-height: 38px;
  margin: ${({ margin }) => margin ? margin : "0 20px 15px"};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "space-between"};
`;
const TableBox = styled.div`
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 1px solid ${colors.grayColor};
`;
const InputBox = styled.div`
  width: ${({ width }) => width ? width : '100%'};
  height: 35px;
  padding: 0 10px;
  margin: ${({ margin }) => margin ? margin : 0};
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  &::placeholder {
    color: ${colors.placeholderColor};
  }
`;




const Header = styled.div`
  height: 56px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  
`;
const Content = styled.div`
  padding: 10px;
`;
const Text = styled.div`
  font-size: 14px;
  color: ${colors.deepDarkGrayColor};
  margin: ${({margin}) => margin ? margin : 0};
`;
const IntroduceContent = styled.div`
  min-height: 500px;
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
`;
const Box = styled.div``;

const NewsLetterDetailPresenter = ({
                                       tabMenu,
                                       handleTabMenu,
                                       newsData,
                                       update,
                                       setUpdate,
                                       editorState,
                                       onEditorStateChange,
                                       editorToHtml,
                                       onDeleteNews,
                                       onSaveNews
                                   }) => {
    return (
        <>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="뉴스 레터"
                tabList={["뉴스 레터 보기"]}
            />
            <Wrapper>
                <ButtonGroup>
                    {!update && (
                        <>
                            <Button
                                width={120}
                                height={38}
                                title="이전"
                                border={`1px solid ${colors.deepNavyColor}`}
                                bgColor={colors.whiteColor}
                                fontColor={colors.deepNavyColor}
                                fontSize={16}
                                fontWeight={600}
                            />
                            <Button
                                width={120}
                                height={38}
                                title="수정"
                                bgColor={colors.deepNavyColor}
                                fontColor={colors.whiteColor}
                                fontSize={16}
                                fontWeight={600}
                                onClick={() => setUpdate(true)}
                            />
                        </>
                    )}
                </ButtonGroup>

                <TableBox>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    제목
                                </TableCell>
                                <TableCell>
                                    <InputBox>
                                        <Input
                                            // value={title}
                                            // onChange={e => onInputChange(e, "title")}
                                            placeholder="제목을 입력해주세요."
                                        />
                                    </InputBox>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    내용
                                </TableCell>
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
                <ButtonGroup justifyContent="flex-end" margin="40px 20px 20px">
                    <Button
                        width={120}
                        height={38}
                        title="즉시 발송"
                        bgColor={colors.deepNavyColor}
                        fontColor={colors.whiteColor}
                        fontSize={16}
                        fontWeight={600}
                        margin="0 0 0 15px"
                        // onClick={onSaveNews}
                    />
                </ButtonGroup>

                {/*<Header>
                    <Text>등록일 : </Text>
                    <Text margin="0 0 0 50px">페이지 뷰 : </Text>
                </Header>
                <Content>
                    {update ? (
                            <>
                                <WysiwygEditor
                                    editorState={editorState}
                                    onEditorStateChange={onEditorStateChange}
                                />
                                <ButtonGroup>
                                    <Box>
                                        <Button
                                            width={120}
                                            height={38}
                                            title="삭제"
                                            border={`1px solid ${colors.activeRed}`}
                                            bgColor={colors.whiteColor}
                                            fontColor={colors.activeRed}
                                            fontSize={16}
                                            fontWeight={600}
                                            onClick={onDeleteNews}
                                        />
                                    </Box>
                                    <Box>
                                        <Button
                                            width={120}
                                            height={38}
                                            title="취소"
                                            border={`1px solid ${colors.deepNavyColor}`}
                                            bgColor={colors.whiteColor}
                                            fontColor={colors.deepNavyColor}
                                            fontSize={16}
                                            fontWeight={600}
                                            onClick={() => setUpdate(false)}
                                        />
                                        <Button
                                            width={120}
                                            height={38}
                                            title="저장"
                                            bgColor={colors.deepNavyColor}
                                            fontColor={colors.whiteColor}
                                            fontSize={16}
                                            fontWeight={600}
                                            margin="0 0 0 15px"
                                            onClick={onSaveNews}
                                        />
                                    </Box>
                                </ButtonGroup>
                            </>
                        )
                        :
                        <IntroduceContent
                            dangerouslySetInnerHTML={{__html: editorToHtml}}
                        />
                    }
                </Content>*/}
            </Wrapper>
        </>
    )
}

export default NewsLetterDetailPresenter;