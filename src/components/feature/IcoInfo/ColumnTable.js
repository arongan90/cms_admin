import React, { useState } from 'react';
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../share/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {ko} from 'date-fns/locale';

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-size: 24px;
  color: ${colors.lightBlack};
`;
const TableBox = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 8px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const Table = styled.table`
  width: 100%;
  background-color: ${colors.whiteColor};
`;
const Td = styled.td`
  height: 55px;
  padding: 10px 16px;
  vertical-align: baseline;
  border-bottom: 1px solid ${colors.borderColor};
  
  &:first-child,
  &:nth-child(3) {
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
  width: ${({ width }) => width ? width : 200}px;
  padding: 5px 10px;
  height: 35px;
  border: 1px solid ${colors.borderColor};
`;
const FileInputLabel = styled.label`
  width: 100px;
  height: 35px;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  border: 1px solid ${colors.activeBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.activeBlue};
  font-weight: bold;
  cursor: pointer;
`;
const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
`;
const Select = styled.select`
  width: ${({ width }) => width ? width : 180}px;
  padding: 5px 10px;
  height: 35px;
  color: ${colors.darkGrayColor};
  border: 1px solid ${colors.borderColor};
  outline: none;
  cursor: pointer;
`;
const RowBox = styled.div`
  margin: ${({ margin }) => margin ? margin : '5px 0 0'};
`;

const ColumnTable = ({
                         addIcoState,
                         onIcoChange,
                         onDateChange
                     }) => {
    const [alignment, setAlignment] = useState('link');
    const handleChange = (event, newAlignment) => {
        if (!newAlignment) return;
        setAlignment(newAlignment);
    };

    return (
        <Wrapper>
            <TableBox>
                <Table>
                    <tbody>
                        <tr>
                            <Td>코인명</Td>
                            <Td>
                                <Input
                                    name="coinName"
                                    value={addIcoState.coinName}
                                    onChange={e => onIcoChange(e, "COIN_NAME")}
                                    placeholder="Fanadise"
                                />
                            </Td>
                            <Td>화폐단위</Td>
                            <Td>
                                <Input
                                    name="monetaryUnit"
                                    value={addIcoState.monetaryUnit}
                                    onChange={e => onIcoChange(e, "MONETARY_UNIT")}
                                    placeholder="FAN"
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td>카테고리</Td>
                            <Td>
                                <Select
                                    name="category"
                                    value={addIcoState.category}
                                    onChange={e => onIcoChange(e, "CATEGORY")}
                                >
                                    <option disabled hidden>Stablecoins</option>
                                    <option value="general">일반</option>
                                    <option value="DeFi">DeFi</option>
                                    <option value="NFT">NFT</option>
                                </Select>
                            </Td>
                            <Td>구분</Td>
                            <Td>
                                <Select
                                    name="type"
                                    value={addIcoState.type}
                                    onChange={e => onIcoChange(e, "TYPE")}
                                >
                                    <option value="">일반</option>
                                    <option value="">DeFi</option>
                                    <option value="">NFT</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>초기 토큰가격</Td>
                            <Td>
                                <Select
                                    name="initialPrice"
                                    value={addIcoState.initialPrice}
                                    onChange={e => onIcoChange(e, "INITIAL_PRICE")}
                                >
                                    <option value="0.10">0.10</option>
                                    <option value="0.11">0.11</option>
                                    <option value="0.12">0.12</option>
                                </Select>
                            </Td>
                            <Td>분야</Td>
                            <Td>
                                <Select
                                    name="branch"
                                    value={addIcoState.branch}
                                    onChange={e => onIcoChange(e, "BRANCH")}
                                >
                                    <option disabled hidden>Platform</option>
                                    <option value="setting">설정 > 암호화폐 범주에 따라 선택하게끔...</option>
                                    <option value="branch">설정</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>플랫폼</Td>
                            <Td>
                                <Input
                                    name="platform"
                                    value={addIcoState.platform}
                                    onChange={e => onIcoChange(e, "PLATFORM")}
                                    placeholder="ERC20"
                                />
                            </Td>
                            <Td>상태</Td>
                            <Td>
                                <Select
                                    name="state"
                                    value={addIcoState.state}
                                    onChange={e => onIcoChange(e, "STATE")}
                                >
                                    <option value="onGoing">진행 중</option>
                                    <option value="schedule">예정</option>
                                    <option value="deadline">마감</option>
                                    <option value="undetermined">미정</option>
                                    <option value="delay">지연</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>시작일</Td>
                            <Td>
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                    <DatePicker
                                        label="시작일"
                                        mask="____.__.__"
                                        inputFormat="yyyy.MM.dd"
                                        value={addIcoState.startDate}
                                        onChange={newValue => onDateChange(newValue, "startDate")}
                                        renderInput={(params) => {
                                            params.inputProps.placeholder = "yyyy.mm.dd";
                                            return (<TextField {...params} />
                                            )
                                        }}
                                    />
                                </LocalizationProvider>
                            </Td>
                            <Td>종료일</Td>
                            <Td>
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                    <DatePicker
                                        label="종료일"
                                        mask="____.__.__"
                                        inputFormat="yyyy.MM.dd"
                                        value={addIcoState.finishDate}
                                        onChange={newValue => onDateChange(newValue, "finishDate")}
                                        renderInput={(params) => {
                                            params.inputProps.placeholder = "yyyy.mm.dd";
                                            return (<TextField {...params} />
                                            )
                                        }}
                                    />
                                </LocalizationProvider>
                            </Td>
                        </tr>
                        <tr>
                            <Td>하드캡</Td>
                            <Td>
                                <Input
                                    name="hardCap"
                                    value={addIcoState.hardCap}
                                    onChange={e => onIcoChange(e, "HARD_CAP")}
                                />&nbsp;
                                <Select
                                    width={70}
                                    name="hardCapMonetaryUnit"
                                    value={addIcoState.hardCapMonetaryUnit}
                                    onChange={e => onIcoChange(e, "HARD_CAP_MONETARY_UNIT")}
                                >
                                    <option value="S">S</option>
                                    <option value="€">€</option>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                </Select>
                            </Td>
                            <Td>소프트캡</Td>
                            <Td>
                                <Input
                                    name="softCap"
                                    value={addIcoState.softCap}
                                    onChange={e => onIcoChange(e, "SOFT_CAP")}
                                />&nbsp;
                                <Select
                                    width={70}
                                    name="softCapMonetaryUnit"
                                    value={addIcoState.softCapMonetaryUnit}
                                    onChange={e => onIcoChange(e, "SOFT_CAP_MONETARY_UNIT")}
                                >
                                    <option value="S">S</option>
                                    <option value="€">€</option>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>목표</Td>
                            <Td>
                                <Input
                                    name="goal"
                                    value={addIcoState.goal}
                                    onChange={e => onIcoChange(e, "GOAL")}
                                />&nbsp;
                                <Select
                                    width={70}
                                    name="softCapMonetaryUnit"
                                    value={addIcoState.softCapMonetaryUnit}
                                    onChange={e => onIcoChange(e, "SOFT_CAP_MONETARY_UNIT")}
                                >
                                    <option value="USD">USD</option>
                                    <option value="ETH">ETH</option>
                                </Select>
                            </Td>
                            <Td>판매용 토큰</Td>
                            <Td>
                                <Input
                                    name="sellToken"
                                    value={addIcoState.sellToken}
                                    onChange={e => onIcoChange(e, "SELL_TOKEN")}
                                />&nbsp;
                                <Select
                                    width={70}
                                    name="softCapMonetaryUnit"
                                    value={addIcoState.softCapMonetaryUnit}
                                    onChange={e => onIcoChange(e, "SOFT_CAP_MONETARY_UNIT")}
                                >
                                    <option value="USD">CRDN</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>웹사이트</Td>
                            <Td>
                                <Input
                                    name="webSite"
                                    value={addIcoState.webSite}
                                    onChange={e => onIcoChange(e, "WEB_SITE")}
                                    placeholder="웹사이트의 URL 주소를 입력해주세요."
                                />
                            </Td>
                            <Td>승인</Td>
                            <Td>
                                <RowBox margin="0">
                                    <Select>
                                        <option value="">USD</option>
                                    </Select>
                                    <Button
                                        width={35}
                                        height={35}
                                        border={`1px solid ${colors.activeBlue}`}
                                        bgColor={colors.whiteColor}
                                        fontColor={colors.activeBlue}
                                        margin="0 0 0 10px"
                                        title="+"
                                    />
                                </RowBox>
                                <RowBox>

                                </RowBox>
                            </Td>
                        </tr>
                        <tr>
                            <Td>백서</Td>
                            <Td>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton value="link">링크</ToggleButton>
                                    <ToggleButton value="file">파일</ToggleButton>
                                </ToggleButtonGroup>
                                <RowBox margin="15px 0 0 0 ">
                                    {alignment === 'link' &&
                                        <Input
                                            placeholder="링크를 입력해주세요."
                                        />
                                    }
                                    {alignment === 'file' &&
                                        <FileInputLabel>
                                            <FileInput
                                                type="file"
                                                accept="*"
                                            />
                                            파일찾기
                                        </FileInputLabel>
                                    }
                                </RowBox>
                            </Td>
                            <Td>커뮤니티</Td>
                            <Td>
                                <RowBox>
                                    <Input
                                        placeholder="명칭을 입력해주세요."
                                    />
                                </RowBox>
                                <RowBox>
                                    <Input
                                        placeholder="URL 주소를 입력해주세요."
                                    />
                                    <Button
                                        width={35}
                                        height={35}
                                        title="+"
                                        border={`1px solid ${colors.activeBlue}`}
                                        fontColor={colors.activeBlue}
                                        bgColor={colors.whiteColor}
                                        margin="0 0 0 10px"
                                    />
                                </RowBox>
                                <RowBox>

                                </RowBox>
                            </Td>
                        </tr>
                        <tr>
                            <Td>태그</Td>
                            <Td>
                                <Input
                                    placeholder="태그를 추가해주세요."
                                />
                                <Button
                                    width={35}
                                    height={35}
                                    title="+"
                                    border={`1px solid ${colors.activeBlue}`}
                                    fontColor={colors.activeBlue}
                                    bgColor={colors.whiteColor}
                                    margin="0 0 0 10px"
                                />
                            </Td>
                            <Td />
                            <Td />

                        </tr>
                    </tbody>
                </Table>
            </TableBox>
        </Wrapper>
    )
}

export default ColumnTable;