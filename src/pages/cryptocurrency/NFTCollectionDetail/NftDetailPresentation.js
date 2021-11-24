import React from 'react';
import styled, {css} from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  margin: 20px 20px 40px;
  text-align: right;
  ${({display}) => display && css`
    display: ${display};
    justify-content: space-between;
    align-items: center;
  `}
`;
const ButtonBox = styled.div``;
const CollectionForm = styled.div`
  margin: 30px auto 80px;
  padding: 20px;
  border-radius: 8px;
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
                title="NFT 콜렉션"
                tabList={["NFT 콜렉션"]}
            />
            <Wrapper>
                <ButtonGroup display="flex">
                    <Button
                        title="이전"
                        width={70}
                        height={46}
                        border={`1px solid ${colors.activeBlue}`}
                        fontColor={colors.activeBlue}
                        bgColor={colors.whiteColor}
                        fontSize={18}
                        onClick={goBack}
                    />
                    <Button
                        title="콜렉션 수정"
                        width={150}
                        height={46}
                        fontColor={colors.whiteColor}
                        bgColor={colors.activeBlue}
                        fontSize={18}
                        onClick={handleNftUpdate}
                    />
                </ButtonGroup>
                <CollectionForm>
                    <CollectionTable>
                        <tbody>
                        <tr>
                            <Td>콜렉션명</Td>
                            <Td>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="collectionName"
                                        placeholder="콜렉션명을 입력해주세요."
                                        value={collectionInfo.collectionName}
                                        onChange={onCollectionChange}
                                        readOnly={!nftUpdate}
                                    />
                                </InputBox>
                            </Td>
                            <Td>자산 수</Td>
                            <Td>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="assetsCount"
                                        placeholder="자산 수를 입력해주세요."
                                        value={collectionInfo.assetsCount}
                                        onChange={onCollectionChange}
                                        readOnly={!nftUpdate}
                                    />
                                </InputBox>
                            </Td>
                        </tr>
                        <tr>
                            <Td>콜렉션 총액</Td>
                            <Td>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="totalAmount"
                                        placeholder="콜렉션 총액을 입력해주세요."
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
                            <Td>총 거래금액</Td>
                            <Td>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="totalTransactionVolume"
                                        placeholder="총 거래금액을 입력해주세요."
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
                            <Td>링크 URL</Td>
                            <Td colSpan={3}>
                                <InputBox border={!!nftUpdate}>
                                    <Input
                                        name="linkUrl"
                                        placeholder="링크 URL을 입력해주세요."
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

                {nftUpdate && (
                    <>
                        <ButtonGroup display="flex">
                            <ButtonBox>
                                <Button
                                    title="삭제"
                                    width={120}
                                    height={50}
                                    fontSize={18}
                                    fontWeight={600}
                                    fontColor={colors.activeRed}
                                    border={`1px solid ${colors.activeRed}`}
                                    onClick={handleNftDelete}
                                />
                            </ButtonBox>
                            <ButtonBox>
                                <Button
                                    title="취소"
                                    width={120}
                                    height={50}
                                    fontSize={18}
                                    fontWeight={600}
                                    fontColor={colors.activeBlue}
                                    border={`1px solid ${colors.activeBlue}`}
                                    onClick={handleCancel}
                                />
                                <Button
                                    title="수정"
                                    width={120}
                                    height={50}
                                    fontSize={18}
                                    fontWeight={600}
                                    fontColor={colors.whiteColor}
                                    bgColor={colors.activeBlue}
                                    margin="0 0 0 20px"
                                    onClick={handleNftSave}
                                />
                            </ButtonBox>
                        </ButtonGroup>
                    </>
                )}
            </Wrapper>
        </ContentBox>
    )
}

export default NftDetailPresentation;