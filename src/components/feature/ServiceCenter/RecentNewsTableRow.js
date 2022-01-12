import React from 'react';
import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";
import colors from "../../../styles/colors";

const Row = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${colors.borderColor};
  cursor: pointer;
`;

const Text = styled.div`
  width: ${({ width }) => width ? width : 80}%;
  font-size: ${({ fontSize }) => fontSize ? fontSize : 16}px;
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
  color:  ${({ fontColor }) => fontColor ? fontColor : colors.lightBlack};
  margin: ${({ margin }) => margin ? margin : "10px 0"};
  white-space: pre-wrap;
`;

const TradeTableRow = ({
                           아이디 = 1,
                           제목 = "Alternative of Cryptocurrencies to Bitcoin",
                           내용 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

                       }) => {
    const history = useHistory();

    return (
        <Row>
            <Text fontColor={colors.blackColor} fontWeight={600} fontSize={18} margin="20px 0">
                {제목}
            </Text>
            <Text>
                {내용}
            </Text>
        </Row>
    )
}

export default TradeTableRow;