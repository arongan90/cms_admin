import React from 'react';
import styled, {css} from "styled-components";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import StarGraph from "../../feature/IcoInfo/StarGraph";
import TableContainer from "@mui/material/TableContainer";
import {useHistory} from "react-router-dom";
import {numberAddComma} from "../../../utils/common";
import Chart from "../Chart";
import colors from "../../../styles/colors";

const InfoBox = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const RowBox = styled.div`
  ${({width}) => width && css`
    width: ${({width}) => width};
  `}
  text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
  margin: ${({margin}) => margin ? margin : '0 auto'};
`;
const Text = styled.div`
  color: ${({fontColor}) => fontColor ? fontColor : colors.lightBlack};
`;

const ListTable = ({
                       tableHeadColumns,
                       ...props
                   }) => {
    const history = useHistory();

    return (
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {tableHeadColumns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                    width: column.width,
                                    border: column.border,
                                    fontSize: 16,
                                    background: colors.ultraLightGray,
                                    borderTop: `1px solid rgba(224, 224, 224, 1)`
                                }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.icoList && props.icoList
                        .map(list => {
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={list.id}
                                    onClick={() => history.push(`icoDetail/${list.id}`)}
                                    style={{cursor: 'pointer'}}
                                >
                                    {tableHeadColumns.map((column) => {
                                        const value = list[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === 'ai_recommend'
                                                    ? <StarGraph value={value}/>
                                                    : (column.format && typeof value === 'number') || (typeof value === 'object')
                                                        ? column.format(value)
                                                        : value
                                                }
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}

                    {props.coinList && props.coinList
                        .map(list => {
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={list.id}
                                    onClick={() => history.push(`/coinInfoDetail/${list.id}`)}
                                    style={{cursor: 'pointer'}}
                                >
                                    {tableHeadColumns.map((column) => {
                                        const value = list[column.id];

                                        return (
                                            <TableCell key={column.id} align={column.align} style={{padding: '12px'}}>
                                                {column.id === 'ranking' && value}
                                                {column.id === 'coinName' && value}
                                                {column.id === 'currentPrice' && numberAddComma(value)}
                                                {column.id === 'chart' && <Chart data={value}/>}
                                                {column.id === '24_transaction' &&
                                                <RowBox textAlign="right" width="50%">
                                                    <Text>
                                                        {numberAddComma(value.total_price)}
                                                    </Text>
                                                    <Text>
                                                        {numberAddComma(value.price)}
                                                    </Text>
                                                </RowBox>
                                                }
                                                {column.id === 'prediction_24' &&
                                                    <InfoBox>
                                                        <RowBox textAlign="left" margin="0 10px 0 0">
                                                            <Text>시세</Text>
                                                            <Text>거래량</Text>
                                                        </RowBox>

                                                        <RowBox textAlign="right">
                                                            <Text fontColor={colors.activeGreen}>
                                                                {numberAddComma(value.marketPrice)}
                                                            </Text>
                                                            <Text fontColor={colors.activeDeepRed}>
                                                                {numberAddComma(value.transactionVolume)}
                                                            </Text>
                                                            <Text>
                                                                {numberAddComma(value.coin)}
                                                            </Text>
                                                        </RowBox>

                                                        <RowBox marginLeft={10}>
                                                            <Text fontColor={colors.activeGreen}>3.86 %</Text>
                                                            <Text fontColor={colors.activeDeepRed}>3.86 %</Text>
                                                        </RowBox>
                                                    </InfoBox>
                                                }
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ListTable;