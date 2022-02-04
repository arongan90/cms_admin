import React from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import WysiwygEditor from "../../../components/share/WysiwygEditor";
import HeaderContent from "../../../components/share/HeaderContent";
import {Table, TableBody, TableCell, TableRow} from "@mui/material";
import {Modal} from "@material-ui/core";
import SendMailStatus from "../../../components/feature/Mailing/SendMailStatus";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
  min-height: calc(100vh - 144px);
`;
const ButtonGroup = styled.div`
  min-height: 38px;
  margin: ${({margin}) => margin ? margin : "0 20px 15px"};
  display: flex;
  align-items: center;
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : "space-between"};
`;
const TableBox = styled.div`
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 1px solid ${colors.grayColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  th {
    text-align: center;
    background-color: ${colors.ultraLightGray};
  }

  th:nth-child(1) {
    width: 50%;
    text-align: left;
  }

  td {
    padding: 10px !important;
  }

  td:nth-child(1) {
    width: 100px;
    border-right: 1px solid ${colors.theadBgColor};
    background-color: ${colors.ultraLightGray};
  }

  tr:nth-child(2) td {
    vertical-align: top;
  }
`;
const InputBox = styled.div`
  width: ${({width}) => width ? width : '100%'};
  height: 35px;
  padding: 0 10px;
  margin: ${({margin}) => margin ? margin : 0};
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
const IntroduceContent = styled.div`
  height: 390px;
  position: relative;
  overflow: hidden;
  padding: 10px;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
`;
const Text = styled.span`
  color: ${({fontColor}) => fontColor ? fontColor : colors.lightBlack};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 500};
  font-size: ${({fontSize}) => fontSize ? fontSize : 16}px;
  margin: ${({margin}) => margin ? margin : 0};
`;

const NewsLetterDetailPresenter = ({
                                       tabMenu,
                                       handleTabMenu,
                                       // newsData,
                                       update,
                                       mailStatusOpen,
                                       handleImmediatelySend,
                                       handleCloseModal,
                                       setUpdate,
                                       editorState,
                                       onEditorStateChange,
                                       editorToHtml,

                                       handleGoBack,
                                       handleCancel,
                                       handleSave,
                                       title = "Alternative of Cryptocurrencies to Bitcoin"
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
                                onClick={handleGoBack}
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
                                            value={title}
                                            // onChange={}
                                            readOnly={!update}
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
                                    {update
                                        ?
                                        <WysiwygEditor
                                            height={300}
                                            editorState={editorState}
                                            onEditorStateChange={onEditorStateChange}
                                        />
                                        :
                                        <IntroduceContent
                                            dangerouslySetInnerHTML={{__html: editorToHtml}}
                                        />
                                    }
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableBox>
                <ButtonGroup justifyContent="flex-end" margin="40px 20px">
                    {update
                        ?
                        <>
                            <Button
                                width={120}
                                height={38}
                                title="취소"
                                border={`1px solid ${colors.deepNavyColor}`}
                                bgColor={colors.whiteColor}
                                fontColor={colors.deepNavyColor}
                                fontSize={16}
                                fontWeight={600}
                                onClick={handleCancel}
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
                                onClick={handleSave}
                            />
                        </>
                        :
                        <Button
                            width={120}
                            height={38}
                            ICON
                            title="즉시 발송"
                            bgColor={colors.deepNavyColor}
                            fontColor={colors.whiteColor}
                            fontSize={16}
                            fontWeight={600}
                            margin="0 0 0 15px"
                            onClick={handleImmediatelySend}
                        />
                    }
                </ButtonGroup>

                {!update && (
                    <TableBox>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Text fontWeight={600} fontColor={colors.blackColor}>수신 대상자</Text>
                                        <Text fontSize={14} margin="0 0 0 10px">
                                           (200)
                                        </Text>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Text fontWeight={600}>홍길동</Text>
                                        <Text margin="0 0 0 44px">
                                            kildong@gmail.com
                                        </Text>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableBox>
                )}
            </Wrapper>

            <Modal
                open={mailStatusOpen}
                onClose={handleCloseModal}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <>
                    <SendMailStatus
                        onClose={handleCloseModal}
                    />
                </>
            </Modal>
        </>
    )
}

export default NewsLetterDetailPresenter;