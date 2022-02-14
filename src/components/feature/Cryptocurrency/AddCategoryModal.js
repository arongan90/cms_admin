import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../share/Button";

const Wrapper = styled.div`
  width: 500px;
  height: 250px;
  padding: 20px;
  margin: 15% auto;
  background-color: ${colors.whiteColor};
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.darkGrayColor};
  margin: 10px 0 30px;
`;
const Inputs = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${colors.borderColor};
  border-radius: 7px;
  padding: 0 10px;
`;
const ButtonGroup = styled.div`
  text-align: right;
  margin: 20px 10px;
`;

const AddCategoryModal = ({
                              handleCategoryModalClose,
                              categoryInputs,
                              inputChange,
                              onAddCategory,
                              onUpdateCategory,
                              type
                          }) => {
    const ref = useRef();

    useEffect(() => ref.current.focus(), []);
    return (
        <Wrapper>
            <Title>카테고리 {type === "update" ? "수정" : "추가"}</Title>
            <Inputs
                ref={ref}
                value={categoryInputs}
                onChange={inputChange}
                onKeyUp={e => e.key === "Enter" && onAddCategory()}
                placeholder="추가하실 카테고리를 입력해주세요."
            />
            <ButtonGroup>
                <Button
                    title="취소"
                    width={70}
                    height={38}
                    border={`1px solid ${colors.darkBlueColor}`}
                    bgColor={colors.whiteColor}
                    fontColor={colors.darkBlueColor}
                    onClick={handleCategoryModalClose}
                />
                <Button
                    title={type === "update" ? "수정" : "추가"}
                    width={70}
                    height={38}
                    bgColor={colors.darkBlueColor}
                    fontColor={colors.whiteColor}
                    margin="0 0 0 20px"
                    onClick={type === "update" ? onUpdateCategory : onAddCategory}
                />
            </ButtonGroup>
        </Wrapper>
    )
}

export default AddCategoryModal;