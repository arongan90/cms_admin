import React from 'react';
import HeaderContent from "../../../components/share/HeaderContent";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import WysiwygEditor from "../../../components/share/WysiwygEditor";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
  min-height: calc(100vh - 144px);
`;
const ButtonGroup = styled.div`
  //min-height: 38px;
  margin: 50px 0 100px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  align-items: center;
`;
const Header = styled.div`
  height: 56px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 1px solid ${colors.grayColor};
`;
const Content = styled.div`
  padding: 10px;
`;
const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize ? fontSize : 14}px;
  color: ${({ fontColor }) => fontColor ? fontColor : colors.deepDarkGrayColor};
  margin: ${({margin}) => margin ? margin : 0};
`;
const IntroduceContent = styled.div`
  min-height: 500px;
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  border-bottom: 1px solid ${colors.borderColor};
`;
const Box = styled.div`
  display: flex;
`;
const InputBox = styled.div`
  width: 500px;
  font-size: 16px;
  color: ${colors.blackColor};
`;
const Input = styled.input`
  width: 90%;
  height: 100%;
  font-size: 16px;
  margin-left: 10px;
  border: none;
  padding: 10px 6px;
`;

const RecentNewsDetailPresenter = ({
                                       tabMenu,
                                       handleTabMenu,
                                       newsData,
                                       update,
                                       setUpdate,
                                       editorState,
                                       onEditorStateChange,
                                       editorToHtml,
                                       onDeleteNews,
                                       goBack,
                                       onSaveNews
                                   }) => {
    console.info('데이타 : ', newsData);
    return (
        <>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="최근 소식"
                tabList={["최근 소식 보기"]}
            />
            <Wrapper>
                <Header>
                    <InputBox>
                        제목 :
                        <Input
                            value={newsData.title}
                        />
                    </InputBox>
                    <Box>
                        <Text>등록일 : {newsData.date}</Text>
                        <Text margin="0 0 0 50px">페이지 뷰 : {newsData.viewCount}</Text>
                    </Box>
                </Header>
                <Content>
                    {update ? (
                            <>
                                <WysiwygEditor
                                    editorState={editorState}
                                    onEditorStateChange={onEditorStateChange}
                                />
                                <ButtonGroup justifyContent="space-between">
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
                        <>
                            <IntroduceContent
                                dangerouslySetInnerHTML={{__html: editorToHtml}}
                            />
                            <ButtonGroup>
                                <Button
                                    width={120}
                                    height={38}
                                    title="이전"
                                    border={`1px solid ${colors.deepNavyColor}`}
                                    bgColor={colors.whiteColor}
                                    fontColor={colors.deepNavyColor}
                                    fontSize={16}
                                    fontWeight={600}
                                    onClick={goBack}
                                />
                                <Button
                                    width={120}
                                    height={38}
                                    title="수정"
                                    margin="0 0 0 20px"
                                    bgColor={colors.deepNavyColor}
                                    fontColor={colors.whiteColor}
                                    fontSize={16}
                                    fontWeight={600}
                                    onClick={() => setUpdate(true)}
                                />
                            </ButtonGroup>
                        </>
                    }
                </Content>
            </Wrapper>
        </>
    )
}

export default RecentNewsDetailPresenter;