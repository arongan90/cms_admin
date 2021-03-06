import React, {useState} from 'react';
import styled, {css} from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../share/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import chipDelete from "../../../images/chipDelete.svg";
// import uploadImage from "../../../images/UploadImage.svg";
import CustomChip from "../../share/CustomChip";
import IconImageUpload from "../../share/IconImageUpload";

const TableBox = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 8px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const Table = styled.table`
  width: 100%;
  background-color: ${colors.whiteColor};

  td {
    min-height: 55px;
    padding: 10px 16px;
    vertical-align: top;
    border-bottom: 1px solid ${colors.borderColor};

    &:first-child,
    &:nth-child(3) {
      padding-top: 14px;
      width: 120px !important;
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
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
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
  width: 100%;
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
  margin-right: 5px;
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
  max-width: 500px;
  margin: ${({margin}) => margin ? margin : '5px 0 0'};
  white-space: initial;

  ${({flex}) => flex && css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
  `}
  .css-c9qyo9-MuiButtonBase-root-MuiChip-root {
    background-color: ${colors.textFieldBlue};
    color: ${colors.whiteColor};
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
const SubText = styled.div`
  font-size: 12px;
  color: ${colors.grayColor};
`;

const CryptocurrencyColumnTable = ({
                                       coinState,
                                       onCoinChange,
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
                    <td>코인명</td>
                    <td>
                        <RowBox flex>
                            <IconImageUpload
                                onChange={e => onCoinChange(e, "COIN_IMAGE")}
                                state={coinState}
                            />
                            <InputBox>
                                <Input
                                    name="coinName"
                                    value={coinState.coinName}
                                    onChange={e => onCoinChange(e, "COIN_NAME")}
                                    placeholder="Bitcoin"
                                />
                            </InputBox>
                        </RowBox>
                        <RowBox>
                            <SubText>※ 아이콘 이미지는 72px x 72px 사이즈의 png, jpeg, svg 확장자만 업로드 가능합니다.</SubText>
                        </RowBox>
                    </td>
                    <td>화폐단위</td>
                    <td>
                        <InputBox>
                            <Input
                                name="monetaryUnit"
                                value={coinState.monetaryUnit}
                                onChange={e => onCoinChange(e, "MONETARY_UNIT")}
                                placeholder="BTC"
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>카테고리</td>
                    <td>
                        <RowBox margin="0">
                            <Select
                                name="category"
                                value={coinState.category}
                                onChange={e => onCoinChange(e, "CATEGORY")}
                            >
                                <option disabled hidden value="카테고리 선택">카테고리 선택</option>
                                <option value="general">일반</option>
                                <option value="DeFi">DeFi</option>
                                <option value="NFT">NFT</option>
                            </Select>
                            <Button
                                width={35}
                                height={35}
                                border={`1px solid ${colors.activeBlue}`}
                                bgColor={colors.whiteColor}
                                fontColor={colors.activeBlue}
                                margin="0 0 0 10px"
                                title="+"
                                onClick={() => handleAddChips("category")}
                            />
                        </RowBox>
                        <RowBox margin="5px 0 0 -5px">
                            {!!chipState && chipState.category.map((item, index) => (
                                <CustomChip
                                    key={index}
                                    item={item}
                                    deleteIcon={<AppImage src={chipDelete}/>}
                                    onDelete={handleDeleteChips}
                                    type="approval"
                                />
                            ))}
                        </RowBox>
                    </td>
                    <td>구분</td>
                    <td>
                        <Select
                            name="type"
                            value={coinState.type}
                            onChange={e => onCoinChange(e, "TYPE")}
                        >
                            <option value="">일반</option>
                            <option value="">DeFi</option>
                            <option value="">NFT</option>
                        </Select>
                    </td>
                </tr>
                <tr>
                    <td>가격</td>
                    <td>
                        <InputBox>
                            <Input
                                name="price"
                                value={coinState.price}
                                onChange={e => onCoinChange(e, "PRICE")}
                                placeholder="FAN"
                            />
                        </InputBox>
                        &nbsp;&nbsp;
                        <Select
                            width={80}
                            name="priceUnit"
                            value={coinState.priceUnit}
                            onChange={e => onCoinChange(e, "PRICE_UNIT")}
                        >
                            <option value="KRW">KRW</option>
                            <option value="BTN">BTN</option>
                            <option value="ETH">ETH</option>
                        </Select>
                    </td>
                    <td>분야</td>
                    <td>
                        <Select
                            name="branch"
                            value={coinState.branch}
                            onChange={e => onCoinChange(e, "BRANCH")}
                        >
                            <option disabled hidden>Platform</option>
                            <option value="setting">설정 > 암호화폐 범주에 따라 선택하게끔...</option>
                            <option value="branch">설정</option>
                        </Select>
                    </td>
                </tr>
                <tr>
                    <td>플랫폼</td>
                    <td>
                        <InputBox>
                            <Input
                                name="platform"
                                value={coinState.platform}
                                onChange={e => onCoinChange(e, "PLATFORM")}
                                placeholder="ERC20"
                            />
                        </InputBox>
                    </td>
                    <td>발행량</td>
                    <td>
                        <InputBox>
                            <Input
                                name="issueVolume"
                                value={coinState.platform}
                                onChange={e => onCoinChange(e, "ISSUE_VOLUME")}
                            />
                            %
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>시가 총액</td>
                    <td>
                        <InputBox>
                            <Input
                                name="marketCap"
                                value={coinState.marketCap}
                                onChange={e => onCoinChange(e, "MARKET_CAP")}
                            />
                        </InputBox>
                        &nbsp;&nbsp;
                        <Select
                            width={80}
                            name="marketCapUnit"
                            value={coinState.marketCapUnit}
                            onChange={e => onCoinChange(e, "MARKET_CAP_UNIT")}
                        >
                            <option value="KRW">KRW</option>
                            <option value="BTN">BTN</option>
                            <option value="ETH">ETH</option>
                        </Select>
                    </td>
                    <td>유통량</td>
                    <td>
                        <InputBox>
                            <Input
                                name="distribution"
                                value={coinState.distribution}
                                onChange={e => onCoinChange(e, "DISTRIBUTION")}
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>24시간 거래대금</td>
                    <td>
                        <InputBox>
                            <Input
                                name="transactionPrice_24"
                                value={coinState.transactionPrice_24}
                                onChange={e => onCoinChange(e, "TRANSACTION_PRICE_24")}
                            />
                        </InputBox>&nbsp;&nbsp;
                        <Select
                            width={80}
                            name="transactionPriceUnit"
                            value={coinState.transactionPriceUnit}
                            onChange={e => onCoinChange(e, "TRANSACTION_PRICE_UNIT")}
                        >
                            <option value="KRW">KRW</option>
                            <option value="BTN">BTN</option>
                            <option value="ETH">ETH</option>
                        </Select>
                    </td>
                    <td>총 공급량</td>
                    <td>
                        <InputBox>
                            <Input
                                name="totalSupply"
                                value={coinState.totalSupply}
                                onChange={e => onCoinChange(e, "TOTAL_SUPPLY")}
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>가치 완전 희석</td>
                    <td>
                        <InputBox>
                            <Input
                                name="fullyDilutedShares"
                                value={coinState.fullyDilutedShares}
                                onChange={e => onCoinChange(e, "FULLY_DILUTED_SHARES")}
                            />
                        </InputBox>
                        &nbsp;&nbsp;
                        <Select
                            width={80}
                            name="fullyDilutedSharesUnit"
                            value={coinState.fullyDilutedSharesUnit}
                            onChange={e => onCoinChange(e, "FULLY_DILUTED_SHARES_UNIT")}
                        >
                            <option value="KRW">KRW</option>
                            <option value="BTN">BTN</option>
                            <option value="ETH">ETH</option>
                        </Select>
                    </td>
                    <td>최대 공급량</td>
                    <td>
                        <InputBox>
                            <Input
                                name="maxSupply"
                                value={coinState.maxSupply}
                                onChange={e => onCoinChange(e, "MAX_SUPPLY")}
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>익스플로러</td>
                    <td>
                        <RowBox margin="0">
                            <InputBox>
                                <Input
                                    name="explorer"
                                    value={coinState.explorer}
                                    onChange={e => onCoinChange(e, "EXPLORER")}
                                />
                            </InputBox>
                            <Button
                                width={35}
                                height={35}
                                border={`1px solid ${colors.activeBlue}`}
                                bgColor={colors.whiteColor}
                                fontColor={colors.activeBlue}
                                margin="0 0 0 10px"
                                title="+"
                                onClick={() => handleAddChips("explorer")}
                            />
                        </RowBox>
                        <RowBox margin="5px 0 0 -5px">
                            {!!chipState && chipState.explorer.map(item => (
                                <CustomChip
                                    key={item}
                                    item={item}
                                    onDelete={handleDeleteChips}
                                    type="explorer"
                                />
                            ))}
                        </RowBox>
                    </td>
                    <td>지갑</td>
                    <td>
                        <RowBox>
                            <InputBox>
                                <Input
                                    width={285}
                                    name="wallet"
                                    value={coinState.wallet}
                                    onChange={e => onCoinChange(e, "WALLET")}
                                />
                            </InputBox>
                            <Button
                                width={35}
                                height={35}
                                border={`1px solid ${colors.activeBlue}`}
                                bgColor={colors.whiteColor}
                                fontColor={colors.activeBlue}
                                margin="0 0 0 10px"
                                title="+"
                                onClick={() => handleAddChips("wallet")}
                            />
                        </RowBox>
                        <RowBox margin="5px 0 0 -5px">
                            {!!chipState && chipState.wallet.map((item) => (
                                <CustomChip
                                    key={item}
                                    item={item}
                                    onDelete={handleDeleteChips}
                                    type="wallet"
                                />
                            ))}
                        </RowBox>
                    </td>
                </tr>
                <tr>
                    <td>웹사이트</td>
                    <td>
                        <InputBox width={300}>
                            <Input
                                name="webSite"
                                value={coinState.webSite}
                                onChange={e => onCoinChange(e, "WEB_SITE")}
                                placeholder="웹사이트의 URL 주소를 입력해주세요."
                            />
                        </InputBox>
                    </td>
                    <td>소스코드</td>
                    <td>
                        <InputBox width={300}>
                            <Input
                                name="sourceCode"
                                value={coinState.sourceCode}
                                onChange={e => onCoinChange(e, "SOURCE_CODE")}
                                placeholder="https://github.com/bitcoin"
                            />
                        </InputBox>
                    </td>
                </tr>
                <tr>
                    <td>백서</td>
                    <td>
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
                            {alignment === 'link' && (
                                <InputBox width={300}>
                                    <Input
                                        value={coinState.whitePaper.link}
                                        onChange={e => onCoinChange(e, "WHITE_PAPER_LINK")}
                                        placeholder="링크를 입력해주세요."
                                    />
                                </InputBox>
                            )}
                            {alignment === 'file' && (
                                <RowBox flex>
                                    <FileInputLabel>
                                        <FileInput
                                            type="file"
                                            accept="*"
                                            name="whitePaper"
                                            onChange={e => onCoinChange(e, "WHITE_PAPER_FILE")}
                                        />
                                        파일찾기
                                    </FileInputLabel>
                                    {!!coinState.whitePaper.file && (
                                        <InputBox width={200}>
                                            <Input
                                                value={!!coinState.whitePaper.file && coinState.whitePaper.file.name}
                                                readOnly
                                            />
                                        </InputBox>
                                    )}
                                </RowBox>
                            )}
                        </RowBox>
                    </td>
                    <td rowSpan={2}>커뮤니티</td>
                    <td rowSpan={2}>
                        <RowBox>
                            <InputBox width={300}>
                                <Input
                                    name="title"
                                    value={coinState.community.title}
                                    onChange={e => onCoinChange(e, "COMMUNITY")}
                                    placeholder="명칭을 입력해주세요."
                                />
                            </InputBox>
                        </RowBox>
                        <RowBox>
                            <InputBox width={300}>
                                <Input
                                    name="url"
                                    value={coinState.community.url}
                                    onChange={e => onCoinChange(e, "COMMUNITY")}
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
                                    item={item}
                                    deleteIcon={<AppImage src={chipDelete}/>}
                                    onDelete={handleDeleteChips}
                                    type="community"
                                />
                            ))}
                        </RowBox>
                    </td>
                </tr>
                <tr>
                    <td>태그</td>
                    <td>
                        <RowBox>
                            <InputBox>
                                <Input
                                    name="tag"
                                    value={coinState.tag}
                                    onChange={e => onCoinChange(e, "TAG")}
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
                                    item={item}
                                    onDelete={handleDeleteChips}
                                    type="tag"
                                />
                            ))}
                        </RowBox>
                    </td>
                </tr>
                <tr>
                    <td>개요</td>
                    <td colSpan={3}>
                        <Textarea
                            name="summary"
                            value={coinState.summary}
                            onChange={e => onCoinChange(e, "SUMMARY")}
                        />
                    </td>
                </tr>

                </tbody>
            </Table>
        </TableBox>
    )
}

export default CryptocurrencyColumnTable;