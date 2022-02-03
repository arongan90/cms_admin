import React from 'react';
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import colors from "../../../styles/colors";
import { TableRow, TableCell } from "@mui/material";

const Row = styled(TableRow)`
  height: 60px;
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid ${colors.borderColor};
  cursor: pointer;
`;
const Cell = styled(TableCell)`
  border-right: none !important;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize ? fontSize : 16}px;
  font-weight: 500;
  color:  ${({ fontColor }) => fontColor ? fontColor : colors.lightBlack};
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'center'};
  margin: ${({ margin }) => margin ? margin : "10px 0"};
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* ellipsis line */
  -webkit-box-orient: vertical;
`;

const NewsLetterTableRow = ({
                                id = 1,
                                title = "Alternative of Cryptocurrencies to Bitcoin",
                                recipient = "211",
                                date = "2021.08.20",
                                발송 = "예정"
                            }) => {
    const history = useHistory();

    return (
        <Row id={id} onClick={() => history.push(`/newsLetterDetail/${id}`)}>
            <Cell>
                <Text fontColor={colors.blackColor} margin="5px 0 10px" textAlign="left">
                    {title}
                </Text>
            </Cell>
            <Cell>
                <Text fontSize={14}>
                    {recipient}
                </Text>
            </Cell>
            <Cell>
                <Box>
                    <Text fontColor={colors.deepDarkGrayColor}>
                        {date}
                    </Text>
                    <Text fontColor={colors.grayColor} margin="10px 0 10px 15px">
                        {발송}
                    </Text>
                </Box>
            </Cell>
        </Row>
    )
}

export default NewsLetterTableRow;