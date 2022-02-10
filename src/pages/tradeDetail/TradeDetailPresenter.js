import React, { useEffect } from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import krFlag from "../../images/nationalFlag/kr.svg";
import Switch from '@mui/material/Switch';

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
  border-radius: 4px;
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
const ImageBox = styled.div`
  width: ${({ width }) => width ? width : 24}px;
  height: ${({ height }) => height ? height : 24}px;
  margin: ${({ margin }) => margin ? margin : "0 10px 0 0"}px;
`;
const AppImage = styled.img`
  width: 24px;
  height: 24px;
`;
const RowBox = styled.div`
  ${({width}) => width && css`
    width: ${width};
  `}
  display: flex;
  align-items: ${({align}) => align ? align : "center"};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : "center"};
  margin: ${({ margin }) => margin ? margin : 0};
  ${({flexDirection}) => flexDirection && css`
    flex-direction: ${flexDirection};
  `}
  ${({padding}) => padding && css`
    padding: ${padding};
  `}
`;
const LinkText = styled.span`
  cursor: pointer;

  &:hover {
    color: ${colors.hoverBlue}
  }
`;
const MiniTable = styled.table`
  width: ${({ width }) => width ? width : '100%'};
  border: 1px solid ${colors.borderColor};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 5px 8px -1px ${colors.shadowColor};

  td {
    ${({ width }) => width && css`
      width: ${width};
    `}
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
  
  tbody td:last-child {
    text-align: right;
  }

  // DatePicker Style
  .css-ocs8jh-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input,
  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px !important;
    padding: 0 10px;
  }

  .css-h33d2j-MuiInputBase-root-MuiOutlinedInput-root,
  .css-bkqowc-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 4px;
  }

  // Material Select
  .css-ocs8jh-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
    display: flex;
    align-items: center;
  }
`;
const Text = styled.div`
  font-size: ${({fontSize}) => fontSize ? fontSize : 16}px;
  color: ${({fontColor}) => fontColor ? fontColor : colors.blackColor};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 500};
  margin: ${({margin}) => margin ? margin : "0 10px 0 0"};
  cursor: ${({cursor}) => cursor ? cursor : "default"};
`;
const InputBox = styled.div`
  width: ${({width}) => width ? width : 200}px;
  padding: 5px 10px;
  height: 35px;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
`;
const FileLabel = styled.label`
  width: 100px;
  height: 35px;
  margin-right: 10px;
  padding: 6px 0;
  text-align: center;
  color: ${colors.activeBlue};
  border: ${`1px solid ${colors.activeBlue}`};
  border-radius: 4px;
  
`;
const Input = styled.input`
  width: ${({width}) => width ? width : 100}%;
  height: 100%;
  border: none;
  ${({ fileUpload }) => fileUpload && css`
    display: none;
  `}
`;
const StyledSelect = styled.select`
  width: 70px;
  height: 100%;
  text-align: center;
  border: none;
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 50px auto 80px;
`;

const TradeDetailPresenter = ({
                                  tabMenu,
                                  handleTabMenu,
                                  goBack,
                                  goIcoUpdate,

                                  tradeVisit,
                                  onTradeVisitChange,
                                  handleDeleteTradeVisit,
                                  handleDeleteCoin,
                                  handleDeleteCurrency,
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
                                    <ImageBox>
                                        <AppImage src={bitcoinImage}/>
                                    </ImageBox>
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
                            <td colSpan={3}>
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
                                <RowBox justifyContent="space-around">
                                    <RowBox>
                                        <Text>거래량</Text>
                                        <InputBox width={250}>
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
                                    <RowBox margin="0 0 0 20px">
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
                                    </RowBox>
                                </RowBox>
                            </td>
                            <td>
                                <RowBox>
                                    <FileLabel>
                                        엑셀 업로드
                                        <Input
                                            fileUpload
                                            type="file"
                                            accept=".xls, .xlsx"
                                            onChange={e => onTradeVisitChange(e, "excel")}
                                        />
                                    </FileLabel>
                                    <InputBox width={150}>
                                        <Input
                                            value={tradeVisit.excel ? tradeVisit.excel.name : ''}
                                            readOnly
                                        />
                                    </InputBox>
                                </RowBox>
                            </td>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td colSpan={2}>
                                <RowBox justifyContent="space-around">
                                    <Text>2022.08.22</Text>
                                    <Text>24,262 USD</Text>
                                    <Text>274</Text>
                                </RowBox>
                            </td>
                            <td>
                                <Text
                                    fontColor={colors.lightBlack}
                                    cursor="pointer"
                                    onClick={() => handleDeleteTradeVisit()}
                                >
                                    비노출
                                    <Switch

                                    />
                                    노출
                                </Text>
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
                            <td colSpan={3}>
                                코인
                            </td>
                        </tr>
                        <tr>
                            <td width={120}>
                                <RowBox>코인 종류</RowBox>
                            </td>
                            <td colSpan={2}>
                                <FormControl sx={{m: 1, minWidth: 250}}>
                                    <Select
                                        value={tradeVisit.coin}
                                        onChange={e => onTradeVisitChange(e.target.value, "coin")}
                                    >
                                        <MenuItem value="bitcoin">
                                            <ImageBox>
                                                <AppImage src={bitcoinImage}/>
                                            </ImageBox>
                                            <Text>Bitcoin</Text>
                                        </MenuItem>
                                        <MenuItem value="ethereum">Ethereum</MenuItem>
                                        <MenuItem value="tether">Tether</MenuItem>
                                        <MenuItem value="BNB">BNB</MenuItem>
                                    </Select>
                                </FormControl>
                            </td>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>
                                {1}
                            </td>
                            <td>
                                <RowBox padding="0 20px" justifyContent="flex-start">
                                    <ImageBox>
                                        <AppImage src={bitcoinImage}/>
                                    </ImageBox>
                                    <Text>Bitcoin</Text>
                                </RowBox>
                            </td>
                            <td>
                                <Text
                                    fontColor={colors.lightBlack}
                                    cursor="pointer"
                                    onClick={() => handleDeleteCoin()}
                                >
                                    비노출
                                    <Switch

                                    />
                                    노출
                                </Text>
                            </td>
                        </tr>
                        </tbody>
                    </MiniTable>
                </TableBox>

                <PagingBox>
                    <Paging/>
                </PagingBox>

                {/* 지원화폐 */}
                <TableBox>
                    <MiniTable>
                        <thead>
                        <tr>
                            <td colSpan={3}>
                                지원화폐
                            </td>
                        </tr>
                        <tr>
                            <td width={120}>
                                <RowBox>화폐 종류</RowBox>
                            </td>
                            <td colSpan={2}>
                                <FormControl sx={{m: 1, minWidth: 250}}>
                                    <Select
                                        value={tradeVisit.currency}
                                        onChange={e => onTradeVisitChange(e.target.value, "currency")}
                                    >
                                        <MenuItem value="KRW">
                                            <ImageBox width={24} height={24}>
                                                <AppImage src={krFlag} />
                                            </ImageBox>
                                            <Text>South Korea Won</Text>
                                            <Text margin="0 0 0 20px" fontColor={colors.darkGrayColor}>KRW ₩</Text>
                                        </MenuItem>
                                        <MenuItem value="ethereum">Ethereum</MenuItem>
                                        <MenuItem value="tether">Tether</MenuItem>
                                        <MenuItem value="BNB">BNB</MenuItem>
                                    </Select>
                                </FormControl>
                            </td>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>
                                {1}
                            </td>
                            <td>
                                <RowBox padding="0 20px" justifyContent="flex-start">
                                    <ImageBox width={24} height={24}>
                                        <AppImage src={krFlag} />
                                    </ImageBox>
                                    <Text>South Korea Won</Text>
                                    <Text margin="0 0 0 20px" fontColor={colors.darkGrayColor}>KRW ₩</Text>
                                </RowBox>
                            </td>
                            <td>
                                <Text
                                    fontColor={colors.lightBlack}
                                    cursor="pointer"
                                    onClick={() => handleDeleteCurrency()}
                                >
                                    비노출
                                    <Switch

                                        onChange={e => {
                                            console.info(e.target.checked)
                                        }}
                                    />
                                    노출
                                </Text>
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