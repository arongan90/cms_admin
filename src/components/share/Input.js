import React from 'react';
import styled, { css } from "styled-components";
import colors from "../../styles/colors";

const InputBox = styled.input`
  width: ${({width}) => width}%;
  height: ${({height}) => height ? height : '35px'};
  padding: 5px 10px;
  border: 1px solid ${colors.borderColor};
  outline: none;
  background: ${colors.deepWhiteColor};
  margin: ${({ margin }) => margin ? margin : 0};
  
  ${({ readOnly }) => readOnly && css`
    cursor: pointer;
  `}
`;

const Input = ({ name, width, height, value, margin, placeholder, readOnly, setOpenAddress, infoInputChange, type, onChange, onKeyUp }) => {
    return (
        <InputBox
            name={name}
            width={width}
            height={height}
            value={value}
            margin={margin}
            placeholder={placeholder}
            readOnly={readOnly}
            onClick={() => setOpenAddress && setOpenAddress(true)}
            onChange={e => infoInputChange ? infoInputChange(e, type && type) : onChange(e)}
            onKeyDown={e => onKeyUp && onKeyUp(e)}
        />
    )
}

export default React.memo(Input);