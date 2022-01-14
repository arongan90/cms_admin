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
  min-height: 38px;
  margin: 20px 20px 15px;
  display: flex;
  justify-content: space-between;
`;
const Header = styled.div`
  height: 56px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-top: 2px solid ${colors.grayColor};
  border-bottom: 1px solid ${colors.grayColor};
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

const RecentNewsDetailPresenter = ({
                                       tabMenu,
                                       handleTabMenu,
                                       newsData,
                                       update,
                                       setUpdate,
                                       editorState,
                                       onEditorStateChange,
                                       editorToHtml,
                                       onDeleteNews
                                   }) => {

    return (
        <>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="최근 소식"
                tabList={["최근 소식 보기"]}
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
                <Header>
                    <Text>등록일 : {newsData.date}</Text>
                    <Text margin="0 0 0 50px">페이지 뷰 : {newsData.viewCount}</Text>
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
                                            // onClick={}
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
                </Content>
            </Wrapper>
        </>
    )
}

export default RecentNewsDetailPresenter;