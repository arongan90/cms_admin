import React from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";
import Button from "./Button";

const Wrapper = styled.div`
  width: 320px;
  height: 200px;
  padding: 20px;
  border: 1px solid ${colors.grayColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.lightBlack};
  margin: 0 0 20px;
`;
const ButtonGroup = styled.div`
  text-align: center;
`;

const DeleteModal = () => {
    return (
        <Wrapper>
            <Text>삭제 하시겠습니까?</Text>
            <ButtonGroup>
                <Button
                    title="취소"
                    width={90}
                    height={38}
                    fontSize={18}
                    bgColor={colors.whiteColor}
                    border={`1px solid ${colors.darkBlueColor}`}
                    fontColor={colors.darkBlueColor}
                />
                <Button
                    title="삭제"
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

export default DeleteModal;