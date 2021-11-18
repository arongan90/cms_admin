import React, {useState} from 'react';
import styled, {css} from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../share/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {ko} from 'date-fns/locale';
import Chip from '@mui/material/Chip';
import chipDelete from "../../../images/chipDelete.svg";
import uploadImage from "../../../images/UploadImage.svg";

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
  width: 40%;
  min-height: 55px;
  padding: 10px 16px;
  vertical-align: ${({verticalAlign}) => verticalAlign ? verticalAlign : 'middle'};
  border-bottom: 1px solid ${colors.borderColor};

  &:first-child,
  &:nth-child(3) {
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
    border-radius: 5px;
  }

  // ToggleButton Style
  .css-fhsron-MuiButtonBase-root-MuiToggleButton-root {
    padding: 5px 11px;
    border-radius: 5px;
  }
`;
const InputBox = styled.div`
  width: ${({width}) => width ? width : 250}px;
  height: 35px;
  display: inline-block;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
  padding: 0 10px;
`;
const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
`;
const Textarea = styled.textarea`
  width: 70%;
  min-height: 200px;
  padding: 10px;
  height: 35px;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
  resize: none;
  outline: none;
`;
const FileInputLabel = styled.label`
  width: 100px;
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  border: 1px solid ${colors.activeBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.activeBlue};
  font-weight: bold;
  cursor: pointer;
`;
const PreviewBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: -1px;
`;
const ImageInputLabel = styled.label`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 5px;
  position: relative;
  border: 1px solid ${colors.borderColor};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding-top: 2px;
  color: ${colors.grayColor};
  cursor: pointer;
`;
const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
`;
const Select = styled.select`
  width: ${({width}) => width ? width : 180}px;
  padding: 5px;
  height: 35px;
  color: ${colors.darkGrayColor};
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;
const RowBox = styled.div`
  margin: ${({margin}) => margin ? margin : '5px 0 0'};

  ${({flex}) => flex && css`
    display: flex;
    align-items: center;
    margin: 0;
  `}
  .css-c9qyo9-MuiButtonBase-root-MuiChip-root {
    background-color: ${colors.textFieldBlue};
    color: ${colors.whiteColor};
  }
`;
const CustomChip = styled(Chip)`
  &:first-child {
    margin-top: 5px;
    margin-left: 5px;
  }

  & + & {
    margin-left: 5px;
    margin-top: 5px;
  }
`;
const AppImage = styled.img`
  ${({width}) => width && css`
    width: ${width};
  `};
  ${({height}) => height && css`
    height: ${height};
  `};
`;

const IcoInfoColumnTable = ({
                                addIcoState,
                                onIcoChange,
                                onDateChange,
                                handleAddChips,
                                handleDeleteChips,
                                chipState,
                            }) => {
    const [alignment, setAlignment] = useState('link');
    const handleChange = (event, newAlignment) => {
        if (!newAlignment) return;
        setAlignment(newAlignment);
    };

    return (
        <TableBox>
            <Table>
                <tbody>
                <tr>
                    <Td>코인명</Td>
                    <Td>
                        <RowBox flex>
                            <ImageInputLabel>
                                <FileInput type="file" accept="image/*" onChange={e => onIcoChange(e, "COIN_IMAGE")}/>
                                {addIcoState.coinImage &&
                                <PreviewBox>
                                    <AppImage width="100%" height="100%" src={addIcoState.coinImage}/>
                                </PreviewBox>
                                }
                                <AppImage width="60%" height="60%" src={uploadImage}/>
                                ICON
                            </ImageInputLabel>
                            <InputBox>
                                <Input
                                    name="coinName"
                                    value={addIcoState.coinName}
                                    onChange={e => onIcoChange(e, "COIN_NAME")}
                                    placeholder="Fanadise"
                                />
                            </InputBox>
                        </RowBox>
                    </Td>
                    <Td>화폐단위</Td>
                    <Td>
                        <InputBox>
                            <Input
                                name="monetaryUnit"
                                value={addIcoState.monetaryUnit}
                                onChange={e => onIcoChange(e, "MONETARY_UNIT")}
                                placeholder="FAN"
                            />
                        </InputBox>
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
                        <InputBox>
                            <Input
                                name="platform"
                                value={addIcoState.platform}
                                onChange={e => onIcoChange(e, "PLATFORM")}
                                placeholder="ERC20"
                            />
                        </InputBox>
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
                        <InputBox>
                            <Input
                                name="hardCap"
                                value={addIcoState.hardCap}
                                onChange={e => onIcoChange(e, "HARD_CAP")}
                            />
                        </InputBox>
                        &nbsp;&nbsp;
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
                        <InputBox>
                            <Input
                                name="softCap"
                                value={addIcoState.softCap}
                                onChange={e => onIcoChange(e, "SOFT_CAP")}
                            />
                        </InputBox>
                        &nbsp;&nbsp;
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
                        <InputBox>
                            <Input
                                name="goal"
                                value={addIcoState.goal}
                                onChange={e => onIcoChange(e, "GOAL")}
                            />
                        </InputBox>
                        &nbsp;&nbsp;
                        {/*
                                    목표 단위 재설정
                                */}
                        <Select
                            width={80}
                            name="goalUnit"
                            value={addIcoState.softCapMonetaryUnit}
                            onChange={e => onIcoChange(e, "GOAL_UNIT")}
                        >
                            <option value="USD">USD</option>
                            <option value="ETH">ETH</option>
                        </Select>
                    </Td>
                    <Td>판매용 토큰</Td>
                    <Td>
                        <InputBox>
                            <Input
                                name="sellToken"
                                value={addIcoState.sellToken}
                                onChange={e => onIcoChange(e, "SELL_TOKEN")}
                            />
                        </InputBox>
                        &nbsp;&nbsp;
                        {/*
                                    판매용 토큰 단위 재설정
                                */}
                        <Select
                            width={80}
                            name="sellTokenUnit"
                            value={addIcoState.softCapMonetaryUnit}
                            onChange={e => onIcoChange(e, "SELL_TOKEN_UNIT")}
                        >
                            <option value="CRDN">CRDN</option>
                            ㄹ
                        </Select>
                    </Td>
                </tr>
                <tr>
                    <Td>웹사이트</Td>
                    <Td>
                        <InputBox
                            width={300}
                        >
                            <Input
                                name="webSite"
                                value={addIcoState.webSite}
                                onChange={e => onIcoChange(e, "WEB_SITE")}
                                placeholder="웹사이트의 URL 주소를 입력해주세요."
                            />
                        </InputBox>
                    </Td>
                    <Td>승인</Td>
                    <Td>
                        <RowBox margin="0">
                            <Select
                                width={120}
                                name="approval"
                                value={addIcoState.approval}
                                onChange={e => onIcoChange(e, "APPROVAL")}
                            >
                                <option value="ETH">ETH</option>
                                <option value="USDT">USDT</option>
                                <option value="BNB">BNB</option>
                                <option value="USDC">USDC</option>
                            </Select>
                            <Button
                                width={35}
                                height={35}
                                border={`1px solid ${colors.activeBlue}`}
                                bgColor={colors.whiteColor}
                                fontColor={colors.activeBlue}
                                margin="0 0 0 10px"
                                title="+"
                                onClick={() => handleAddChips("approval")}
                            />
                        </RowBox>
                        <RowBox margin="5px 0 0 -5px">
                            {!!chipState && chipState.approval.map(item => (
                                <CustomChip
                                    key={item}
                                    label={item}
                                    deleteIcon={<AppImage src={chipDelete}/>}
                                    onDelete={() => handleDeleteChips(item, "approval")}
                                />
                            ))}
                        </RowBox>
                    </Td>
                </tr>
                <tr>
                    <Td verticalAlign="top">백서</Td>
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
                                <InputBox>
                                    <Input
                                        value={addIcoState.whitePaper.link}
                                        onChange={e => onIcoChange(e, "WHITE_PAPER_LINK")}
                                        placeholder="링크를 입력해주세요."
                                    />
                                </InputBox>
                            }
                            {alignment === 'file' &&
                            <FileInputLabel>
                                <FileInput
                                    type="file"
                                    accept="*"
                                    name="whitePaper"
                                    onChange={e => onIcoChange(e, "WHITE_PAPER_FILE")}
                                />
                                파일찾기
                            </FileInputLabel>
                            }
                        </RowBox>
                    </Td>
                    <Td rowSpan={2} verticalAlign="top">커뮤니티</Td>
                    <Td rowSpan={2} verticalAlign="top">
                        <RowBox>
                            <InputBox>
                                <Input
                                    name="title"
                                    value={addIcoState.community.title}
                                    onChange={e => onIcoChange(e, "COMMUNITY")}
                                    placeholder="명칭을 입력해주세요."
                                />
                            </InputBox>
                        </RowBox>
                        <RowBox>
                            <InputBox>
                                <Input
                                    name="url"
                                    value={addIcoState.community.url}
                                    onChange={e => onIcoChange(e, "COMMUNITY")}
                                    placeholder="URL 주소를 입력해주세요."
                                />
                            </InputBox>
                            <Button
                                width={35}
                                height={35}
                                title="+"
                                border={`1px solid ${colors.activeBlue}`}
                                fontColor={colors.activeBlue}
                                bgColor={colors.whiteColor}
                                margin="0 0 0 10px"
                                onClick={() => handleAddChips("community")}
                            />
                        </RowBox>
                        <RowBox margin="5px 0 0 -5px">
                            {!!chipState && chipState.community.map((item) => (
                                <CustomChip
                                    key={item}
                                    label={item}
                                    deleteIcon={<AppImage src={chipDelete}/>}
                                    onDelete={() => handleDeleteChips(item, "community")}
                                />
                            ))}
                        </RowBox>
                    </Td>
                </tr>
                <tr>
                    <Td>태그</Td>
                    <Td>
                        <RowBox>
                            <InputBox>
                                <Input
                                    name="tag"
                                    value={addIcoState.tag}
                                    onChange={e => onIcoChange(e, "TAG")}
                                    placeholder="태그를 추가해주세요."
                                />
                            </InputBox>
                            <Button
                                width={35}
                                height={35}
                                title="+"
                                border={`1px solid ${colors.activeBlue}`}
                                fontColor={colors.activeBlue}
                                bgColor={colors.whiteColor}
                                margin="0 0 0 10px"
                                onClick={() => handleAddChips("tag")}
                            />
                        </RowBox>
                        <RowBox margin="5px 0 0 -5px">
                            {!!chipState && chipState.tag.map((item) => (
                                <CustomChip
                                    key={item}
                                    label={item}
                                    deleteIcon={<AppImage src={chipDelete}/>}
                                    onDelete={() => handleDeleteChips(item, "tag")}
                                />
                            ))}
                        </RowBox>
                    </Td>
                </tr>
                <tr>
                    <Td verticalAlign="top">개요</Td>
                    <Td colSpan={3}>
                        <Textarea
                            name="summary"
                            value={addIcoState.summary}
                            onChange={e => onIcoChange(e, "SUMMARY")}
                        />
                    </Td>
                </tr>
                <tr>
                    <Td>관련 뉴스</Td>
                    <Td colSpan={3}>
                        <RowBox>
                            <Select
                                width={700}
                                name="relatedNews"
                                value={addIcoState.relatedNews}
                                onChange={e => onIcoChange(e, "RELATED_NEWS")}
                            >
                                <option disabled hidden>관련 뉴스를 선택해주세요.</option>
                                <option value="뉴스 1">뉴스 1</option>
                                <option value="뉴스 2">뉴스 2</option>
                            </Select>
                            <Button
                                width={35}
                                height={35}
                                title="+"
                                border={`1px solid ${colors.activeBlue}`}
                                fontColor={colors.activeBlue}
                                bgColor={colors.whiteColor}
                                margin="0 0 0 10px"
                                onClick={() => handleAddChips("relatedNews")}
                            />
                        </RowBox>
                        <RowBox margin="5px 0 0 -5px">
                            {!!chipState && chipState.relatedNews.map((item) => (
                                <CustomChip
                                    key={item}
                                    label={item}
                                    deleteIcon={<AppImage src={chipDelete}/>}
                                    onDelete={() => handleDeleteChips(item, "relatedNews")}
                                />
                            ))}
                        </RowBox>
                    </Td>
                </tr>
                </tbody>
            </Table>
        </TableBox>
    )
}

export default IcoInfoColumnTable;