import React from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";
import { darken, lighten } from "polished";

const Button = styled.button`
  width: ${({ width }) => width ? `${width}px` : '100%'};
  height: ${({ height }) => height}px;
  font-size: ${({fontSize}) => fontSize}px;
  font-weight: 600;
  color: ${({ fontColor }) => fontColor ? fontColor : colors.whiteColor};
  border: ${({ border }) => border ? border : 'none'};
  margin: ${({ margin }) => margin ? margin : '0 auto'};
  border-radius: 5px;
  background: ${({ bgColor }) => bgColor};
  
  &:hover {
    background: ${({ bgColor }) => lighten(0.1, bgColor)};
  }
  &:active {
    background: ${({ bgColor }) => darken(0.1, bgColor)};
  }
`;

const LongButton = ({ width, height, fontSize, fontColor, border, margin, bgColor, title, onClick }) => {
    return (
        <Button
            width={width}
            height={height}
            fontSize={fontSize}
            fontColor={fontColor}
            margin={margin}
            border={border}
            bgColor={bgColor}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default LongButton;