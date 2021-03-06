import React from 'react';
import styled, {css} from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";

const Wrapper = styled.div`
  padding: 0 20px;
`;
const ButtonGroup = styled.div`
  margin: 0 20px 40px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
`;
const ButtonBox = styled.div``;
const CollectionForm = styled.div`
  margin: 20px auto 50px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
  text-align: center;
`;
const CollectionTable = styled.table`
  width: 100%;
  border-style: solid;
  border-width: 2px 0 2px 0;
  border-color: ${colors.grayColor};
  text-align: start;
`;
const Td = styled.td`
  width: 35%;
  height: 60px;
  padding: 0 10px;
  border-bottom: 1px solid ${colors.borderColor};

  &:nth-child(2n - 1) {
    width: 150px !important;
    border-right: 1px solid ${colors.borderColor};
    background: ${colors.ultraLightGray};
  }

  &:nth-child(3) {
    border-left: 1px solid ${colors.borderColor};
  }
`;
const InputBox = styled.div`
  min-width: 300px;
  width: 70%;
  height: 35px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({border}) => border && css`
    border: 1px solid ${colors.borderColor};
  `}
`;
const Input = styled.input`
  width: 100%;
  border: none;
`;
const Select = styled.select`
  width: 100px;
  height: 100%;
  padding: 5px 10px;
  border: none;
  outline: none;
  color: ${colors.darkGrayColor};
  cursor: pointer;
`;

const NftDetailPresentation = ({
                                   tabMenu,
                                   handleTabMenu,
                                   goBack,
                                   handleNftUpdate,
                                   onCollectionChange,
                                   nftUpdate,
                                   collectionInfo,
                                   handleCancel,
                                   handleNftSave,
                                   handleNftDelete
                               }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="NFT ?????????"
                tabList={["NFT ?????????"]}
            />
            <Wrapper>
                <CollectionForm>
                    <CollectionTable>
                        <tbody>
                        <tr>
                            <Td>????????????</Td>
                            <Td>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="collectionName"
                                        placeholder="??????????????? ??????????????????."
                                        value={collectionInfo.collectionName}
                                        onChange={onCollectionChange}
                                        readOnly={!nftUpdate}
                                    />
                                </InputBox>
                            </Td>
                            <Td>?????? ???</Td>
                            <Td>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="assetsCount"
                                        placeholder="?????? ?????? ??????????????????."
                                        value={collectionInfo.assetsCount}
                                        onChange={onCollectionChange}
                                        readOnly={!nftUpdate}
                                    />
                                </InputBox>
                            </Td>
                        </tr>
                        <tr>
                            <Td>????????? ??????</Td>
                            <Td>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="totalAmount"
                                        placeholder="????????? ????????? ??????????????????."
                                        value={collectionInfo.totalAmount}
                                        onChange={onCollectionChange}
                                        readOnly={!nftUpdate}
                                    />
                                    <Select
                                        name="totalAmountUnit"
                                        value={collectionInfo.totalAmountUnit}
                                        onChange={onCollectionChange}
                                        disabled={!nftUpdate}
                                    >
                                        <option value="KRW">KRW</option>
                                        <option value="BTN">BTN</option>
                                        <option value="ETH">ETH</option>
                                    </Select>
                                </InputBox>
                            </Td>
                            <Td>??? ????????????</Td>
                            <Td>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="totalTransactionVolume"
                                        placeholder="??? ??????????????? ??????????????????."
                                        value={collectionInfo.totalTransactionAmount}
                                        onChange={onCollectionChange}
                                        readOnly={!nftUpdate}
                                    />
                                    <Select
                                        name="totalTransactionVolumeUnit"
                                        value={collectionInfo.totalTransactionAmountUnit}
                                        onChange={onCollectionChange}
                                        disabled={!nftUpdate}
                                    >
                                        <option value="KRW">KRW</option>
                                        <option value="BTN">BTN</option>
                                        <option value="ETH">ETH</option>
                                    </Select>
                                </InputBox>
                            </Td>
                        </tr>
                        <tr>
                            <Td>?????? URL</Td>
                            <Td colSpan={3}>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="linkUrl"
                                        placeholder="?????? URL??? ??????????????????."
                                        value={collectionInfo.linkUrl}
                                        onChange={onCollectionChange}
                                        readOnly={!nftUpdate}
                                    />
                                </InputBox>
                            </Td>
                        </tr>
                        </tbody>
                    </CollectionTable>
                </CollectionForm>

                <ButtonGroup justifyContent={nftUpdate ? "space-between" : "center"}>
                    <Button
                        title={nftUpdate ? "??????" : "??????"}
                        width={120}
                        height={38}
                        border={`1px solid ${nftUpdate ? colors.activeRed : colors.deepNavyColor}`}
                        bgColor={colors.whiteColor}
                        fontColor={nftUpdate ? colors.activeRed : colors.deepNavyColor}
                        onClick={nftUpdate ? handleNftDelete : goBack}
                    />
                    {!nftUpdate
                        ?
                        <Button
                            title="????????? ??????"
                            width={120}
                            height={38}
                            bgColor={colors.deepNavyColor}
                            fontColor={colors.whiteColor}
                            margin="0 0 0 20px"
                            onClick={handleNftUpdate}
                        />
                        : <div>
                            <ButtonBox>
                                <Button
                                    title="??????"
                                    width={120}
                                    height={38}
                                    fontColor={colors.deepNavyColor}
                                    bgColor={colors.whiteColor}
                                    border={`1px solid ${colors.deepNavyColor}`}
                                    onClick={handleCancel}
                                />
                                <Button
                                    title="??????"
                                    width={120}
                                    height={38}
                                    fontColor={colors.whiteColor}
                                    bgColor={colors.deepNavyColor}
                                    margin="0 0 0 20px"
                                    onClick={handleNftSave}
                                />
                            </ButtonBox>
                        </div>
                    }
                </ButtonGroup>
            </Wrapper>
        </ContentBox>
    )
}

export default NftDetailPresentation;