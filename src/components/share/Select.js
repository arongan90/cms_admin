import React from 'react';
import styled from "styled-components";
import colors from "../../styles/Colors";

const SelectBox = styled.select`
  width: ${({width}) => width}%;
  height: ${({height}) => height ? height : '35px'};
  padding: 5px 10px;
  border: 1px solid ${colors.borderColor};
  outline: none;
  color: ${colors.darkGrayColor};
  background: ${colors.deepWhiteColor};
  margin: ${({ margin }) => margin ? margin : 0};
  cursor: pointer;
`;

const Select = ({ options, onChange, width, margin, searchType }) => {
    return (
        <SelectBox
            width={width}
            margin={margin}
            onChange={onChange}
            value={searchType}
        >
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </SelectBox>
    )
}

export default Select;