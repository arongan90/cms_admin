import React from 'react';
import styled from 'styled-components';
import colors from "../../styles/colors";
import Button from "./Button";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  margin: 30px 0;
  background: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const Title = styled.div`
  font-size: 20px;
  color: ${colors.lightBlack};
  margin-right: 50px;
`;
const InputBox = styled.input`
  width: 35%;
  height: 45px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${colors.borderColor};
  margin-right: 10px;
`;

const SearchForm = ({
                value,
                onChange,

                    }) => {
    return (
        <Wrapper>
            <Title>코인명</Title>
            <InputBox
                value={value}
                onChange={onChange}
                placeholder="검색할 코인명을 입력해주세요."
            />
            <Button
                width={100}
                height={45}
                title="찾기"
                bgColor={colors.activeBlue}
                fontColor={colors.whiteColor}
                fontSize={18}
                fontWeight={600}
            />
        </Wrapper>
    )
}

export default SearchForm;