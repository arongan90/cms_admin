import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import WysiwygEditor from "../../../components/share/WysiwygEditor";
import Button from "../../../components/share/Button";

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  height: 38px;
  margin: 20px 20px;
  text-align: center;
`;
const Content = styled.div`
  min-height: calc(100vh - 300px);
  margin: 0 auto;
  padding: 20px;
  border-radius: 4px;
  overflow-y: scroll;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const EditorBox = styled.div`
  min-height: calc(100vh - 340px);
  margin: 0 auto;
  border-radius: 4px;
  white-space: pre-wrap;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;

const TermPresentation = ({
                              tabMenu,
                              handleTabMenu,
                              update,
                              onUpdate,
                              onCancel,

                              editorState,
                              onEditorStateChange,
                              editorToHtml,
                          }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="이용약관"
                tabList={["이용약관"]}
            />
            <Wrapper>
                {update ?
                    <>
                        <EditorBox>
                            <WysiwygEditor
                                editorState={editorState}
                                onEditorStateChange={onEditorStateChange}
                            />
                        </EditorBox>
                        <ButtonGroup>
                            <Button
                                width={120}
                                height={38}
                                title="취소"
                                border={`1px solid ${colors.darkBlueColor}`}
                                bgColor={colors.whiteColor}
                                fontColor={colors.darkBlueColor}
                                fontSize={16}
                                fontWeight={600}
                                onClick={onCancel}
                            />
                            <Button
                                width={120}
                                height={38}
                                title="저장"
                                margin="0 0 0 15px"
                                bgColor={colors.darkBlueColor}
                                fontColor={colors.whiteColor}
                                fontSize={16}
                                fontWeight={600}
                                // onClick={handleUpdate}
                            />
                        </ButtonGroup>
                    </>
                    :
                    <>
                        <Content
                            dangerouslySetInnerHTML={{__html: editorToHtml}}
                        />
                        <ButtonGroup>
                            {!update &&
                            <Button
                                width={120}
                                height={38}
                                title="수정"
                                bgColor={colors.darkBlueColor}
                                fontColor={colors.whiteColor}
                                fontSize={16}
                                fontWeight={600}
                                onClick={onUpdate}
                            />
                            }
                        </ButtonGroup>
                    </>
                }
            </Wrapper>
        </ContentBox>
    )
}

export default TermPresentation;