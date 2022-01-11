import React from 'react';
import HeaderContent from "../../components/share/HeaderContent";
import Box from "@mui/material/Box";
import styled, {css} from "styled-components";
import Button from "../../components/share/Button";
import colors from "../../styles/colors";
import bitcoinImage from "../../images/coinIcon/bitcoin.png";
import {numberAddComma} from "../../utils/common";
import Paging from "../../components/share/Paging";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {ko} from "date-fns/locale";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Wrapper = styled.div`
  max-width: 1550px;
  min-height: 100vh;
  padding: 20px;
`;
const ButtonGroup = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 40px;
`;
const TableBox = styled.div`
  max-height: 500px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${colors.whiteColor};
  box-shadow: 0 0 8px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  & + & {
    margin-top: 30px;
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
  border-bottom: 1px solid ${colors.borderColor};

  ${({bgColor}) => bgColor && css`
    background-color: ${bgColor} !important;
  `}
  &:first-child,
  &:nth-child(3) {
    font-size: 16px;
    width: 10%;
    border-right: 1px solid ${colors.borderColor};
    background-color: ${colors.ultraLightGray};
  }

  &:nth-child(3) {
    border-left: 1px solid ${colors.borderColor};
  }
`;
const AppImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;
const RowBox = styled.div`
  display: flex;
  align-items: ${({align}) => align ? align : "center"};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : "center"};
  ${({flexDirection}) => flexDirection && css`
    flex-direction: ${flexDirection};
  `}
`;
const LinkText = styled.span`
  cursor: pointer;

  &:hover {
    color: ${colors.hoverBlue}
  }
`;
const MiniTable = styled.table`
  width: 100%;
  border: 1px solid ${colors.borderColor};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 5px 8px -1px ${colors.shadowColor};

  td {
    white-space: nowrap;
    padding: 12px 16px;
    border-bottom: 1px solid ${colors.borderColor};

    ${({bgColor}) => bgColor && css`
      background-color: ${bgColor} !important;
    `}

    background-color: ${colors.whiteColor} !important;
  }

  tbody tr td {
    text-align: center;
  }

  // DatePicker Style
  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px;
    padding: 0 10px;
  }

  .css-bkqowc-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 4px;
  }
`;
const Text = styled.div`
  font-size: ${({fontSize}) => fontSize ? fontSize : 16}px;
  color: ${({fontColor}) => fontColor ? fontColor : colors.blackColor};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 500};
  margin: ${({margin}) => margin ? margin : "0 10px 0 0"};
`;
const InputBox = styled.div`
  width: ${({width}) => width ? width : 200}px;
  padding: 5px 10px;
  height: 35px;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
`;
const Input = styled.input`
  width: ${({width}) => width ? width : 100}%;
  height: 100%;
  border: none;
`;
const StyledSelect = styled.select`
  width: 70px;
  height: 100%;
  text-align: center;
  border: none;
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 50px auto 20px;
`;

const TradeDetailPresenter = ({
                                  tabMenu,
                                  handleTabMenu,
                                  goBack,
                                  goIcoUpdate,

                                  tradeVisit,
                                  onTradeVisitChange,
                              }) => {
    return (
        <Box sx={{
            bgcolor: '#eaeff1',
            minHeight: '100vh',
            paddingBottom: 15
        }}>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="거래소 정보"
                tabList={["거래소 정보"]}
            />
            <Wrapper>
                <ButtonGroup>
                    <Button
                        title="이전"
                        width={60}
                        height={38}
                        border={`1px solid ${colors.deepNavyColor}`}
                        fontColor={colors.deepNavyColor}
                        bgColor={colors.whiteColor}
                        fontSize={16}
                        onClick={goBack}
                    />
                    <Button
                        title="ICO 수정"
                        width={100}
                        height={38}
                        fontColor={colors.whiteColor}
                        bgColor={colors.deepNavyColor}
                        fontSize={16}
                        onClick={goIcoUpdate}
                    />
                </ButtonGroup>

                <TableBox>
                    <Table>
                        <tbody>
                        <tr>
                            <Td>
                                거래소
                            </Td>
                            <Td>
                                <RowBox justifyContent="flex-start">
                                    <AppImage src={bitcoinImage}/>
                                    {"Binance"}
                                </RowBox>
                            </Td>
                            <Td>
                                구분
                            </Td>
                            <Td>
                                {"스팟"}
                            </Td>
                        </tr>
                        <tr>
                            <Td>
                                신뢰점수
                            </Td>
                            <Td>
                                {9.9}
                            </Td>
                            <Td>
                                마켓
                            </Td>
                            <Td>
                                {numberAddComma(1358)}
                            </Td>
                        </tr>

                        <tr>
                            <Td>
                                사이트 URL
                            </Td>
                            <Td colSpan={3}>
                                <LinkText onClick={() => window.open('', '_blank')}>
                                    {"https://www.ninance.com/"}
                                </LinkText>
                            </Td>
                        </tr>
                        <tr>
                            <Td>
                                수수료 URL
                            </Td>
                            <Td colSpan={3}>
                                <LinkText onClick={() => window.open('', '_blank')}>
                                    {"https://www.ninance.com/"}
                                </LinkText>
                            </Td>
                        </tr>
                        <tr>
                            <Td>
                                채팅 URL
                            </Td>
                            <Td colSpan={3}>
                                <LinkText onClick={() => window.open('', '_blank')}>
                                    {"https://www.ninance.com/"}
                                </LinkText>
                            </Td>
                        </tr>
                        <tr>
                            <Td>
                                트위터 URL
                            </Td>
                            <Td colSpan={3}>
                                <LinkText onClick={() => window.open('', '_blank')}>
                                    {"https://www.ninance.com/"}
                                </LinkText>
                            </Td>
                        </tr>
                        </tbody>
                    </Table>
                </TableBox>

                <TableBox>
                    <MiniTable>
                        <thead>
                        <tr>
                            <td colSpan={4}>
                                거래량, 방문
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <RowBox>
                                    <Text>날짜</Text>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                        <DatePicker
                                            label="시작일"
                                            mask="____.__.__"
                                            inputFormat="yyyy.MM.dd"
                                            value={tradeVisit.date}
                                            name="date"
                                            onChange={newValue => onTradeVisitChange(newValue, "date")}
                                            renderInput={(params) => {
                                                params.inputProps.placeholder = "yyyy.mm.dd";
                                                return (<TextField {...params} />
                                                )
                                            }}
                                        />
                                    </LocalizationProvider>
                                </RowBox>
                            </td>
                            <td>
                                <RowBox>
                                    <Text>거래량</Text>
                                    <InputBox width={300}>
                                        <Input
                                            value={tradeVisit.volume}
                                            onChange={e => onTradeVisitChange(e.target.value, "volume")}
                                            width={70}
                                        />
                                        <StyledSelect
                                            value={tradeVisit.unit}
                                            onChange={e => onTradeVisitChange(e.target.value, "unit")}
                                        >
                                            <option value="USD">USD</option>
                                        </StyledSelect>
                                    </InputBox>
                                </RowBox>
                            </td>
                            <td>
                                <RowBox>
                                    <Text>방문</Text>
                                    <InputBox>
                                        <Input
                                            value={tradeVisit.visit}
                                            onChange={e => onTradeVisitChange(e.target.value, "visit")}
                                        />
                                    </InputBox>
                                    <Button
                                        title="+"
                                        margin="0 0 0 10px"
                                        width={35}
                                        height={35}
                                        bgColor={colors.whiteColor}
                                        fontColor={colors.activeBlue}
                                        border={`1px solid ${colors.activeBlue}`}
                                    />
                                    <Button
                                        title="엑셀 업로드"
                                        margin="0 0 0 10px"
                                        width={100}
                                        height={35}
                                        bgColor={colors.whiteColor}
                                        fontColor={colors.activeBlue}
                                        border={`1px solid ${colors.activeBlue}`}
                                    />
                                </RowBox>
                            </td>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td colSpan={3}>
                                <RowBox justifyContent="space-around">
                                    <Text>2022.08.22</Text>
                                    <Text>24,262 USD</Text>
                                    <Text>274</Text>
                                </RowBox>
                            </td>
                        </tr>
                        </tbody>
                    </MiniTable>
                </TableBox>

                <PagingBox>
                    <Paging/>
                </PagingBox>

                {/* 코인  */}
                <TableBox>
                    <MiniTable>
                        <thead>
                        <tr>
                            <td colSpan={4}>
                                코인
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <RowBox>
                                    <Text>날짜</Text>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                        <DatePicker
                                            label="시작일"
                                            mask="____.__.__"
                                            inputFormat="yyyy.MM.dd"
                                            value={tradeVisit.date}
                                            name="date"
                                            onChange={newValue => onTradeVisitChange(newValue, "date")}
                                            renderInput={(params) => {
                                                params.inputProps.placeholder = "yyyy.mm.dd";
                                                return (<TextField {...params} />
                                                )
                                            }}
                                        />
                                    </LocalizationProvider>
                                </RowBox>
                            </td>
                            <td>
                                <RowBox>
                                    <Text>코인 종류</Text>

                                    <FormControl sx={{m: 1, minWidth: 120}}>
                                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            // value={tradeVisit.unit}
                                            // onChange={() => onTradeVisitChange()}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>
                                                <AppImage src={bitcoinImage}/>
                                                <Text>Bitcoin</Text>
                                            </MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>

                                </RowBox>
                            </td>
                            <td>
                                <RowBox>
                                    <Text>방문</Text>
                                    <InputBox>
                                        <Input
                                            value={tradeVisit.visit}
                                            onChange={e => onTradeVisitChange(e.target.value, "visit")}
                                        />
                                    </InputBox>
                                    <Button
                                        title="+"
                                        margin="0 0 0 10px"
                                        width={35}
                                        height={35}
                                        bgColor={colors.whiteColor}
                                        fontColor={colors.activeBlue}
                                        border={`1px solid ${colors.activeBlue}`}
                                    />
                                    <Button
                                        title="엑셀 업로드"
                                        margin="0 0 0 10px"
                                        width={100}
                                        height={35}
                                        bgColor={colors.whiteColor}
                                        fontColor={colors.activeBlue}
                                        border={`1px solid ${colors.activeBlue}`}
                                    />
                                </RowBox>
                            </td>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td colSpan={3}>
                                <RowBox justifyContent="space-around">
                                    <Text>2022.08.22</Text>
                                    <Text>24,262 USD</Text>
                                    <Text>274</Text>
                                </RowBox>
                            </td>
                        </tr>
                        </tbody>
                    </MiniTable>
                </TableBox>

                <PagingBox>
                    <Paging/>
                </PagingBox>

            </Wrapper>
        </Box>
    )
}

export default TradeDetailPresenter;