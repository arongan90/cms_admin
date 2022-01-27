import React from 'react';
import styled, {css} from "styled-components";
import colors from "../../styles/colors";
import Button from "./Button";

const Wrapper = styled.div`
  width: ${({width}) => width ? width : 320}px;
  height: ${({height}) => height ? height : 270}px;
  padding: 20px;
  border: 1px solid ${colors.grayColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 20px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-top: 15px;
  }
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.lightBlack};
  margin-right: 24px;
`;
const SelectBox = styled.select`
  width: 200px;
  height: 35px;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
  border: 1px solid ${colors.borderColor};
`;
const Input = styled.input`
  width: 200px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid ${colors.borderColor};
`;
const ButtonGroup = styled.div`
  margin: 36px 0;
  text-align: center;
`;

const UpdateModal = ({
                         title,
                         onClose,
                     }) => {
    return (
        <Wrapper>
            <Title>{title} 수정</Title>
            <Row>
                <Text>언어</Text>
                <SelectBox>
                    <option>한국어</option>
                    <option>영어</option>
                    <option>일본어</option>
                </SelectBox>
            </Row>

            <Row>
                <Text>표기</Text>
                <Input/>
            </Row>

            <ButtonGroup>
                <Button
                    title="취소"
                    width={90}
                    height={38}
                    fontSize={18}
                    bgColor={colors.whiteColor}
                    border={`1px solid ${colors.darkBlueColor}`}
                    fontColor={colors.darkBlueColor}
                    onClick={onClose}
                />
                <Button
                    title="변경"
                    margin="0 0 0 15px"
                    width={90}
                    height={38}
                    fontSize={18}
                    bgColor={colors.darkBlueColor}
                    fontColor={colors.whiteColor}
                />
            </ButtonGroup>
        </Wrapper>
    )
}

export default UpdateModal;