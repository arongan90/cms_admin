import React from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import {TableRow, TableCell} from "@mui/material";

const Row = styled(TableRow)`
  display: flex;
  border-bottom: 1px solid ${colors.borderColor};
`;
const Cell = styled(TableCell)``;
const Text = styled.div`
  font-size: ${({fontSize}) => fontSize ? fontSize : 16}px;
  font-weight: 500;
  color: ${({fontColor}) => fontColor ? fontColor : colors.lightBlack};
  text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
  margin: ${({margin}) => margin ? margin : 0};
`;

const SubscribeTableRow = ({
                               번호 = 1,
                               subscriber = "홍길동",
                               email = "kildong@gmail.com",
                               date = "2021.08.20 오전 10:09",
                           }) => {
    return (
        <Row>
            <Cell>
                <Text>
                    {번호}
                </Text>
            </Cell>
            <Cell>
                <Text>
                    {subscriber}
                </Text>
            </Cell>
            <Cell>
                <Text>
                    {email}
                </Text>
            </Cell>
            <Cell>
                <Text fontColor={colors.deepDarkGrayColor}>
                    {date}
                </Text>
            </Cell>
        </Row>
    )
}

export default SubscribeTableRow;