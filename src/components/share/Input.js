import React from 'react';
import styled, { css } from "styled-components";
import colors from "../../styles/Colors";

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

const Input = ({ name, width, height, value, margin, placeholder, readOnly, setOpenAddress, infoInputChange }) => {
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
            onChange={e => {
                console.info(e.target.name);
                console.info(e.target.value);
                if (infoInputChange) {
                    infoInputChange(e);
                }
            }}
        />
    )
}

export default Input;