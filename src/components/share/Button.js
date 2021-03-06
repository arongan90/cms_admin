import React from 'react';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const CostumeButton = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  border: ${({ border }) => border ? border : 'none'};
  color: ${({ fontColor }) => fontColor};
  margin: ${({ margin }) => margin};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '4px'};
  outline: none;
  
  //& + & {
  //  border-width: 1px 1px 1px 0;
  //}
  
  ${({ bgColor }) => bgColor && css`
    background: ${({ bgColor }) => bgColor};
    &:hover {
      background: ${({ bgColor }) => lighten(0.1 , bgColor)}
    }
    &:active {
      background: ${({ bgColor }) => darken(0.1 , bgColor)}
    }
  `}
`;
const Text = styled.div`
  margin-right: 5px;
  transform: rotate(-40deg);
  margin-bottom: 5px;
`;

const Button = ({
                    ICON,
                    width,
                    height,
                    fontSize = 16,
                    border,
                    fontColor,
                    fontWeight = 600,
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
            fontWeight={fontWeight}
            fontColor={fontColor}
            border={border}
            margin={margin}
            borderRadius={borderRadius}
            bgColor={bgColor}
            // onClick={() => onClick((type && type), (service && service))}
            onClick={onClick}
        >
            {ICON && <Text><SendIcon /></Text>}
            {title}
        </CostumeButton>
    )
}

export default Button;