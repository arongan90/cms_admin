import React from 'react';
import HeaderContent from "../../../components/share/HeaderContent";
import Button from "../../../components/share/Button";
import colors from "../../../styles/colors";
import Box from "@mui/material/Box";
import styled, {css} from "styled-components";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {ko} from "date-fns/locale";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CancelIcon from '@mui/icons-material/Cancel';
import Paging from "../../../components/share/Paging";
import {numberAddComma} from "../../../utils/common";

const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
`;
const ButtonGroup = styled.div`
  text-align: center;
  margin: 50px 0 100px;
`;
const TableBox = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 8px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  & + & {
    margin-top: 50px;
  }
`;
const Table = styled.table`
  width: 100%;
  background-color: ${colors.whiteColor};
`;
const Td = styled.td`
  width: 40%;
  max-width: 200px;
  min-height: 55px;
  white-space: nowrap;
  padding: 12px 16px;
  vertical-align: ${({verticalAlign}) => verticalAlign ? verticalAlign : 'baseline'};
  border-bottom: 1px solid ${colors.borderColor};

  ${({bgColor}) => bgColor && css`
    background-color: ${bgColor} !important;
  `}
  &:first-child,
  &:nth-child(3) {
    font-weight: bold;
    width: 10%;
    border-right: 1px solid ${colors.borderColor};
    background-color: ${colors.ultraLightGray};
  }

  &:nth-child(3) {
    border-left: 1px solid ${colors.borderColor};
  }

  // DatePicker Style
  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px;
    padding: 0 10px;
  }

  .css-bkqowc-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 0;
  }

  // ToggleButton Style
  .css-fhsron-MuiButtonBase-root-MuiToggleButton-root {
    padding: 5px 11px;
    border-radius: 0;
  }
`;
const Input = styled.input`
  width: ${({width}) => width ? width : 200}px;
  padding: 5px 10px;
  height: 35px;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
`;
const TableContentsBox = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
const ContentsTop = styled.div`
  display: flex;
  align-items: center;
`;
const ContentsBody = styled.div`
  width: ${({width}) => width}%;
  min-height: 50px;
  padding: ${({padding}) => padding};

  & + & {
    margin-left: 30px;
  }
`;
const TableText = styled.div`
  font-size: 18px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 5px 5px 0 0;

  ${({border}) => border && css`
    border: ${border}
  `};
  ${({padding}) => padding && css`
    padding: ${padding}
  `};
  ${({margin}) => margin && css`
    margin: ${margin}
  `};
`;
const MiniTable = styled.div`
  width: 100%;
  height: 243px;
  margin-bottom: 20px;
`;
const MiniTableCell = styled.div`
  width: ${({width}) => width}%;
  display: flex;
  align-items: flex-start;
  padding: 10px;
`;
const ListBox = styled.div`
  height: ${({height}) => height}px;
  color: ${({fontColor}) => fontColor};
  font-size: ${({fontSize}) => fontSize}px;
  font-weight: ${({fontWeight}) => fontWeight};
`;
const Text = styled.span`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ fontColor }) => fontColor};
  margin-right: 20px;
  
  ${({ cursor }) => cursor && css`
    cursor: pointer;
  `}
`;
const DeleteButton = styled.div`

`;

const CoinInfoDetailPresentation = ({
                                        tabMenu,
                                        handleTabMenu,
                                        coinDetail,
                                        goBack,
                                        goCoinUpdate,

                                        pastExchange,
                                        handlePastExchange,
                                        pastExchangeChips,
                                        handleAddExchangeChips,
                                        handleDeleteExchangeChips,
                                        pastExchangePage,
                                        handlePastExchangePage
                                    }) => {
    return (
        <Box sx={{
            bgcolor: '#eaeff1',
            paddingBottom: 15
        }}>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="코인 정보"
                tabList={["코인 정보"]}
            />
            <Wrapper>
                <TableBox>
                    <Table>
                        <tbody>
                        <tr>
                            <Td>코인명</Td>
                            <Td>
                                {coinDetail.coinName}
                            </Td>
                            <Td>화폐단위</Td>
                            <Td>
                                {coinDetail.monetaryUnit}
                            </Td>
                        </tr>
                        <tr>
                            <Td>카테고리</Td>
                            <Td>
                                {coinDetail.category}
                            </Td>
                            <Td>구분</Td>
                            <Td>
                                {coinDetail.type}
                            </Td>
                        </tr>
                        <tr>
                            <Td>가격</Td>
                            <Td>
                                {coinDetail.price}
                            </Td>
                            <Td>분야</Td>
                            <Td>
                                {coinDetail.branch}
                            </Td>
                        </tr>
                        <tr>
                            <Td>플랫폼</Td>
                            <Td>
                                {coinDetail.platform}
                            </Td>
                            <Td>발행량</Td>
                            <Td>
                                {coinDetail.issueVolume}
                            </Td>
                        </tr>
                        <tr>
                            <Td>시가 총액</Td>
                            <Td>
                                {coinDetail.marketCap}
                            </Td>
                            <Td>유통량</Td>
                            <Td>
                                {coinDetail.distribution}
                            </Td>
                        </tr>
                        <tr>
                            <Td>24시간 거래대금</Td>
                            <Td>
                                {coinDetail.transactionPrice_24.total_price}
                            </Td>
                            <Td>총 공급량</Td>
                            <Td>
                                {coinDetail.totalSupply}
                            </Td>
                        </tr>
                        <tr>
                            <Td>가치 완전 희석</Td>
                            <Td>
                                {coinDetail.fullyDilutedShares}
                            </Td>
                            <Td>최대 공급량</Td>
                            <Td>
                                {coinDetail.maxSupply}
                            </Td>
                        </tr>
                        <tr>
                            <Td>익스 플로러</Td>
                            <Td>
                                {coinDetail.explorer.map((list, index) => {
                                    return (
                                        <ListBox key={index}> {list} </ListBox>
                                    )
                                })}
                            </Td>
                            <Td>지갑</Td>
                            <Td>
                                {coinDetail.wallet.map((list, index) => {
                                    return (
                                        <ListBox key={index}> {list} </ListBox>
                                    )
                                })}
                            </Td>
                        </tr>
                        <tr>
                            <Td>웹사이트</Td>
                            <Td>
                                {coinDetail.webSite}
                            </Td>
                            <Td>소스코드</Td>
                            <Td>
                                {coinDetail.sourceCode}
                            </Td>
                        </tr>
                        <tr>
                            <Td>백서</Td>
                            <Td>
                                {coinDetail.whitePaper}
                            </Td>
                            <Td rowSpan={2}>커뮤니티</Td>
                            <Td rowSpan={2}>
                                {coinDetail.community.map((list, index) => <div key={index}>{list}</div>)}
                            </Td>
                        </tr>
                        <tr>
                            <Td>태그</Td>
                            <Td>
                                {coinDetail.tag.map((list, index) => <ListBox key={index}>{list}</ListBox>)}
                            </Td>
                        </tr>
                        <tr>
                            <Td verticalAlign="top">개요</Td>
                            <Td colSpan={3}>
                                {coinDetail.summary}
                            </Td>
                        </tr>

                        </tbody>
                    </Table>
                </TableBox>

                <TableBox>
                    <Table>
                        <tbody>
                        <tr><Td colSpan={2}>과거 거래량 데이터</Td></tr>
                        <tr>
                            <Td colSpan={2} bgColor={colors.whiteColor}>
                                <TableContentsBox>
                                    <ContentsTop>
                                        <TableText margin="0 20px 0 0">날짜 :</TableText>
                                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                            <DatePicker
                                                label="시작일"
                                                mask="____.__.__"
                                                inputFormat="yyyy.MM.dd"
                                                value={pastExchange.date}
                                                onChange={newValue => handlePastExchange(newValue, "date")}
                                                renderInput={(params) => {
                                                    params.inputProps.placeholder = "yyyy.mm.dd";
                                                    return (<TextField {...params} />
                                                    )
                                                }}
                                            />
                                        </LocalizationProvider>
                                        <TableText margin="0 20px 0 40px">금액 : </TableText>
                                        <Input
                                            width={250}
                                            value={pastExchange.amount}
                                            onChange={e => handlePastExchange(e.target.value, "amount")}
                                        />
                                        <Button
                                            margin="0 0 0 10px"
                                            title="+"
                                            width={35}
                                            height={35}
                                            fontColor={colors.activeBlue}
                                            fontWeight={600}
                                            fontSize={16}
                                            bgColor={colors.whiteColor}
                                            border={`1px solid ${colors.activeBlue}`}
                                            onClick={handleAddExchangeChips}
                                        />
                                    </ContentsTop>
                                </TableContentsBox>
                            </Td>
                        </tr>
                        <tr>
                            <Td colSpan={2} bgColor={colors.whiteColor}>
                                <ContentsBody padding="0 20px">
                                    <MiniTable>
                                        {pastExchangeChips && pastExchangeChips.map((list, index) => {
                                            return (
                                                <MiniTableCell
                                                    width={100}
                                                    key={index}
                                                >
                                                    <Text>{list.date.toLocaleDateString("ko-KR")} </Text>
                                                    <Text>{numberAddComma(parseInt(list.amount))} USD</Text>
                                                    <Text fontColor={colors.activeRed} cursor="pointer" onClick={() => handleDeleteExchangeChips(list)}>
                                                        <CancelIcon />
                                                    </Text>
                                                </MiniTableCell>
                                            )
                                        })}
                                    </MiniTable>
                                    <Paging
                                        currentPage={pastExchangePage}
                                        totalItemsCount={pastExchangeChips && pastExchangeChips.length}
                                        onChange={handlePastExchangePage}
                                        rowsPerPage={5}
                                    />
                                </ContentsBody>
                            </Td>
                        </tr>
                        <tr>
                            <Td>분석</Td>
                            <Td> </Td>
                        </tr>
                        </tbody>
                    </Table>
                </TableBox>
                <ButtonGroup>
                    <Button
                        title="이전"
                        width={120}
                        height={38}
                        border={`1px solid ${colors.deepNavyColor}`}
                        fontColor={colors.deepNavyColor}
                        bgColor={colors.whiteColor}
                        onClick={goBack}
                    />
                    <Button
                        title="코인 수정"
                        width={120}
                        height={38}
                        bgColor={colors.deepNavyColor}
                        fontColor={colors.whiteColor}
                        margin="0 0 0 20px"
                        onClick={goCoinUpdate}
                    />
                </ButtonGroup>
            </Wrapper>
        </Box>
    )
}

export default CoinInfoDetailPresentation;