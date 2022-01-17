import React from 'react';
import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";
import colors from "../../../styles/colors";

const Row = styled.div`
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
                           title = "제목",
                           content = "내용",
                       }) => {
    const history = useHistory();

    return (
        <Row id={id} onClick={() => history.push(`/faqUpdate/${id}`)}>
            <Text fontColor={colors.blackColor} fontWeight={600} margin="5px 0 10px">
                {title}
            </Text>
            <Text fontSize={14} fontColor={colors.grayColor}>
                {content}
            </Text>
        </Row>
    )
}

export default TradeTableRow;