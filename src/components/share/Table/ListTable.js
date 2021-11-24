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
import {numberAddComma, returnCoinImage} from "../../../utils/common";
import Chart from "../Chart";
import colors from "../../../styles/colors";

const TableWrapper = styled(TableContainer)`
  // TableCell style
  .css-dwuj3p-MuiTableCell-root,
  .css-i02g0k-MuiTableCell-root,
  .css-177gid-MuiTableCell-root,
  .css-1yhpg23-MuiTableCell-root {
    padding: 12px;
    font-size: 16px;
  }
`;
const InfoBox = styled.div`
  width:  ${({width}) => width ? width : '100%'};
  margin: ${({ margin }) => margin ? margin : '0 auto'};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
  align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};
`;
const RowBox = styled.div`
  text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
  margin: ${({margin}) => margin ? margin : '0 auto'};
  
  ${({width}) => width && css`
    width: ${({width}) => width};
  `}
  ${({display}) => display && css`
    display: ${({display}) => display};
    align-items: center;
  `}
`;
const Text = styled.div`
  color: ${({fontColor}) => fontColor ? fontColor : colors.lightBlack};
  text-align: ${({textAlign}) => textAlign ? textAlign : 'inherit'};
  margin: ${({margin}) => margin ? margin : '0 auto'};

  ${({width}) => width && css`
    width: ${({width}) => width};
  `}
  ${({height}) => height && css`
    height: ${({height}) => height};
  `}
  ${({fontWeight}) => fontWeight && css`
    font-weight: ${({fontWeight}) => fontWeight};
  `}
  ${({fontSize}) => fontSize && css`
    font-size: ${({fontSize}) => fontSize}px;
  `}
`;
const AppImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ListTable = ({
                       tableHeadColumns,
                       ...props
                   }) => {
    const history = useHistory();

    return (
        <TableWrapper>
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
                    {/* ICO 정보 */}
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

                    {/* 코인 정보 */}
                    {(props.coinList || props.categoryLists) && (props.coinList || props.categoryLists)
                        .map(list => {
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={list.id}
                                    onClick={() => history.push((props.coinList && `/coinInfoDetail/${list.id}`))}
                                    style={{cursor: 'pointer'}}
                                >
                                    {tableHeadColumns.map((column) => {
                                        const value = list[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === 'ranking' && value}
                                                {column.id === 'coinName' && value}
                                                {column.id === 'currentPrice' && numberAddComma(value)}
                                                {column.id === 'chart' && <Chart data={value}/>}
                                                {column.id === 'transactionPrice_24' &&
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
                                                <InfoBox width="70%">
                                                    <RowBox textAlign="left" margin="0 10px 0 0">
                                                        <Text>시세</Text>
                                                        <Text>거래량</Text>
                                                    </RowBox>

                                                    <RowBox textAlign="right" width="52%">
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

                    {/* 카테고리 */}
                    {props.categoryList && props.categoryList
                        .map(list => {
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={list.id}
                                    onClick={() => history.push(`/categoryDetail/${list.id}`)}
                                    style={{cursor: 'pointer'}}
                                >
                                    {tableHeadColumns.map((column) => {
                                        const value = list[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === 'ranking' && value}
                                                {column.id === 'category' && value}
                                                {column.id === 'coinCount' && numberAddComma(value)}
                                                {column.id === 'marketShare' && value + ' %'}
                                                {column.id === 'topCoin' &&
                                                value.map(coin => (
                                                    <RowBox key={coin.id} display="flex" width="280px" margin="3px auto">
                                                        <Text width="30px" height="30px" margin="0">
                                                            <AppImage src={returnCoinImage(coin.coinName)}/>
                                                        </Text>
                                                        <Text margin="0 0 0 20px" textAlign="left">{coin.coinName}</Text>
                                                        <Text margin="0 0 0 20px">{coin.monetaryUnit}</Text>
                                                    </RowBox>
                                                ))
                                                }
                                                {column.id === 'marketCap' &&
                                                <RowBox textAlign="right">
                                                    <Text fontColor={colors.grayColor}>
                                                        {numberAddComma(value)}
                                                    </Text>
                                                    <Text
                                                        fontColor={list.stockIndex === "up" ? colors.activeGreen : colors.activeRed}>3.86
                                                        %</Text>
                                                </RowBox>
                                                }
                                                {column.id === 'transactionPrice_24' && numberAddComma(value.total_price)}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}

                    {/* NFT 콜렉션 */}
                    {props.collectionList && props.collectionList
                        .map(list => {
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={list.id}
                                    onClick={() => history.push(`/nftDetail/${list.id}`)}
                                    style={{cursor: 'pointer'}}
                                >
                                    {tableHeadColumns.map((column) => {
                                        const value = list[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === 'ranking' && value}
                                                {column.id === 'collectionName' && value}
                                                {column.id === 'assetsCount' && numberAddComma(value)}
                                                {column.id === 'totalAmount' && value}
                                                {column.id === 'transactionVolume_7d' && value}
                                                {column.id === 'sell_7d' && value}
                                                {column.id === 'totalTransactionAmount' && numberAddComma(value)}
                                                {column.id === 'chart_7d' && <Chart data={value}/>}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}

                    {/* 관련 뉴스 */}
                    {props.newsList && props.newsList
                        .map(list => {
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={list.id}
                                    // onClick={() => history.push(`/nftDetail/${list.id}`)}
                                    style={{cursor: 'pointer'}}
                                >
                                    {tableHeadColumns.map((column) => {
                                        const value = list[column.id];
                                        console.info(list);
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === 'id' && value}
                                                {column.id === 'content' && (
                                                    <InfoBox margin="0" justifyContent="flex-start" alignItems="center">
                                                        <Text width="150px" margin="0">
                                                            <AppImage src={list.image} />
                                                        </Text>
                                                        <RowBox textAlign="left" margin="0 40px">
                                                            <Text fontSize={18} fontColor={colors.blackColor}>{list.title}</Text>
                                                            <Text margin="5px 0 10px">{list.content}</Text>
                                                            <Text fontColor={colors.textFieldBlue} onClick={() => window.open(list.url, '_blank')}>{list.url}</Text>
                                                        </RowBox>
                                                    </InfoBox>
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableWrapper>
    )
}

export default ListTable;