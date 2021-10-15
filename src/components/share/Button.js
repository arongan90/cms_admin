import React from 'react';
import { darken, lighten } from 'polished';
import styled from 'styled-components';

const CostumeButton = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-size: ${({ fontSize }) => fontSize}px;
  border: ${({ border }) => border ? border : 'none'};
  color: ${({ fontColor }) => fontColor};
  margin: ${({ margin }) => margin};
  background: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  outline: none;
  
  &:hover {
    background: ${({bgColor}) => lighten(0.1 , bgColor)}
  }
  &:active {
    background: ${({bgColor}) => darken(0.1 , bgColor)}
  }
`;

const Button = ({
                    width,
                    height,
                    fontSize,
                    border,
                    fontColor,
                    margin,
                    bgColor,
                    title,
                    onClick,
                }) => {
    return (
        <CostumeButton
            width={width}
            height={height}
            fontSize={fontSize}
            border={border}
            fontColor={fontColor}
            margin={margin}
            bgColor={bgColor}
            onClick={onClick}
        >
            {title}
        </CostumeButton>
    )
}

export default Button;