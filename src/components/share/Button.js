import React from 'react';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

const CostumeButton = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-size: ${({ fontSize }) => fontSize}px;
  border: ${({ border }) => border ? border : 'none'};
  color: ${({ fontColor }) => fontColor};
  margin: ${({ margin }) => margin};
  background: ${({ bgColor }) => bgColor};
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '5px'};
  outline: none;
  
  & + & {
    border-width: 1px 1px 1px 0;
  }
  
  ${({ bgColor }) => bgColor && css`
    &:hover {
      background: ${({ bgColor }) => lighten(0.1 , bgColor)}
    }
    &:active {
      background: ${({ bgColor }) => darken(0.1 , bgColor)}
    }
  `}
`;

const Button = ({
                    width,
                    height,
                    fontSize,
                    border,
                    fontColor,
                    margin,
                    bgColor,
                    borderRadius,
                    title,
                    onClick,
                    type,
                    service,
                }) => {
    return (
        <CostumeButton
            width={width}
            height={height}
            fontSize={fontSize}
            border={border}
            fontColor={fontColor}
            margin={margin}
            borderRadius={borderRadius}
            bgColor={bgColor}
            onClick={() => onClick((type && type), (service && service))}
        >
            {title}
        </CostumeButton>
    )
}

export default Button;