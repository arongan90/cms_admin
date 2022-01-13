import React from 'react';
import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";
import colors from "../../../styles/colors";

const Row = styled.div`
  height: 156px;
  padding: 10px 20px;
  border-bottom: 1px solid ${colors.borderColor};
  cursor: pointer;
`;

const Text = styled.div`
  width: ${({ width }) => width ? width : 90}%;
  font-size: ${({ fontSize }) => fontSize ? fontSize : 16}px;
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
  color:  ${({ fontColor }) => fontColor ? fontColor : colors.lightBlack};
  margin: ${({ margin }) => margin ? margin : "10px 0"};
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* ellipsis line */
  -webkit-box-orient: vertical;
`;

const TradeTableRow = ({
                           id = 1,
                           title = "Alternative of Cryptocurrencies to Bitcoin",
                           content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                           date = "2021.08.20"
                       }) => {
    const history = useHistory();

    return (
        <Row id={id}>
            <Text fontColor={colors.blackColor} fontWeight={600} margin="5px 0 10px">
                {title}
            </Text>
            <Text fontSize={14}>
                {content}
            </Text>
            <Text fontColor={colors.grayColor}>
                {date}
            </Text>
        </Row>
    )
}

export default TradeTableRow;