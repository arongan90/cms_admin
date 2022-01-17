import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import styled from "styled-components";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";

const Wrapper = styled.div`
  padding: 40px 20px;
`;
const UpdateForm = styled.div`
  height: calc(100vh - 300px);
  padding: 20px;
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.lightBlack};
  margin: ${({ margin }) => margin ? margin : "0 0 10px 0"};
  padding-left: 10px;
`;
const InputBox = styled.div`
  height: 40px;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
  resize: none;
  padding: 10px;
`;
const ButtonGroup = styled.div`
  padding: 20px;
  text-align: right;
`;

const FaqUpdatePresenter = ({
                                tabMenu,
                                handleTabMenu,
                                faqData,
                                onFaqInputChange,
                                onSaveFaq,
                                onCancel
                            }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="FAQ"
                tabList={["FAQ 수정"]}
            />
            <Wrapper>
                <UpdateForm>
                    <Text>제목</Text>
                    <InputBox>
                        <Input
                            name="title"
                            placeholder="제목을 입력해주세요."
                            value={faqData.title}
                            onChange={onFaqInputChange}
                        />
                    </InputBox>
                    <Text margin="20px 0 10px 0">내용</Text>
                    <Textarea
                        name="content"
                        placeholder="내용을 입력해주세요."
                        value={faqData.content}
                        onChange={onFaqInputChange}
                    />

                </UpdateForm>
                <ButtonGroup>
                    <Button
                        width={120}
                        height={38}
                        title="취소"
                        border={`1px solid ${colors.deepNavyColor}`}
                        bgColor={colors.whiteColor}
                        fontColor={colors.deepNavyColor}
                        fontSize={16}
                        fontWeight={600}
                        onClick={onCancel}
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
                        onClick={onSaveFaq}
                    />
                </ButtonGroup>
            </Wrapper>
        </ContentBox>
    )
}

export default FaqUpdatePresenter;