import React from 'react';
import styled from "styled-components";
import HeaderContent from "../../../components/share/HeaderContent";
import ContentBox from "../../../components/share/ContentBox";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import WysiwygEditor from "../../../components/share/WysiwygEditor";

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
`;
const ButtonGroup = styled.div`
  margin: 0 20px 20px;
  text-align: center;
`;
const ContentTable = styled.div`
  width: 100%;
  max-width: 1550px;
  min-height: calc(100vh - 300px);
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  border: 1px solid ${colors.borderColor};
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  color: ${colors.deepNavyColor};
  border-bottom: 1px solid ${colors.borderColor};
  background-color: ${colors.theadBgColor};
`;
const Content = styled.div`
  width: 100%;
  padding: 20px;
  height: 600px;
  overflow-y: scroll;
`;

const CryptocurrencyApiPresentation = ({
                                           tabMenu,
                                           handleTabMenu,
                                           onApiUpdate,
                                           apiUpdate,
                                           onCancel,
                                           onSave,

                                           editorState,
                                           onEditorStateChange,
                                           editorToHtml,
                                       }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="암호화폐 API"
                tabList={["암호화폐 API 목록"]}
            />
            <Wrapper>
                <ContentTable>
                    <Title>
                        내용
                    </Title>
                    {apiUpdate
                        ?
                        <WysiwygEditor
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                        />
                        :
                        <Content
                            dangerouslySetInnerHTML={{__html: editorToHtml}}
                        />
                    }
                </ContentTable>
            </Wrapper>

            <ButtonGroup>
                {apiUpdate
                    ?
                    <>
                        <Button
                            width={120}
                            height={38}
                            title="취소"
                            fontColor={colors.darkBlueColor}
                            bgColor={colors.whiteColor}
                            border={`1px solid ${colors.darkBlueColor}`}
                            onClick={onCancel}
                        />
                        <Button
                            width={120}
                            height={38}
                            title="저장"
                            fontColor={colors.whiteColor}
                            bgColor={colors.darkBlueColor}
                            margin="0 0 0 20px"
                            onClick={onSave}
                        />
                    </>
                    :
                    <Button
                        width={120}
                        height={38}
                        title="수정"
                        fontColor={colors.whiteColor}
                        bgColor={colors.darkBlueColor}
                        fontWeight={600}
                        onClick={onApiUpdate}
                    />
                }
            </ButtonGroup>
        </ContentBox>
    )
}

export default CryptocurrencyApiPresentation;