import React from 'react';
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import Button from "../../../components/share/Button";
import colors from "../../../styles/colors";
import ListTable from "../../../components/share/Table/ListTable";
import Paging from "../../../components/share/Paging";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;
const CategoryListBox = styled.div`
  margin: 0 auto;
  padding: 0 0 50px;
  border-radius: 4px;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const ButtonGroup = styled.div`
  margin: 0 20px 20px;
  text-align: right;
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
  li {
    background-color: ${colors.whiteColor};
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.deepNavyColor};
  margin-bottom: 20px;
`;
const CollectionForm = styled.div`
  margin: 0 0 50px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
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
  border: 1px solid ${colors.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const NftPresentation = ({
                             tabMenu,
                             handleTabMenu,
                             collectionTableColumns,
                             collectionList,

                             currentPage,
                             handleChangePage,
                             addCollectionInfo,
                             onCollectionChange,
                             handleCancel,
                             handleAddCollection
                         }) => {

    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="NFT ?????????"
                tabList={["????????? ??????", "????????? ??????"]}
            />
            <Wrapper>
                {tabMenu === 0 ?
                        <CategoryListBox>
                            <ListTable
                                tableHeadColumns={collectionTableColumns}
                                collectionList={collectionList}
                            />
                            <PagingBox>
                                <Paging
                                    currentPage={currentPage}
                                    totalItemsCount={collectionList && collectionList.length}
                                    onChange={handleChangePage}
                                    rowsPerPage={10}
                                />
                            </PagingBox>
                        </CategoryListBox>
                    :
                    <>
                        <CollectionForm>
                            <Title>NFT????????? ??????</Title>
                            <CollectionTable>
                                <tbody>
                                    <tr>
                                        <Td>????????????</Td>
                                        <Td>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.collectionName}
                                                    name="collectionName"
                                                    onChange={onCollectionChange}
                                                    placeholder="??????????????? ??????????????????."

                                                />
                                            </InputBox>
                                        </Td>
                                        <Td>?????? ???</Td>
                                        <Td>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.assetsCount}
                                                    name="assetsCount"
                                                    onChange={onCollectionChange}
                                                    placeholder="?????? ?????? ??????????????????."

                                                />
                                            </InputBox>
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Td>????????? ??????</Td>
                                        <Td>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.totalAmount}
                                                    name="totalAmount"
                                                    onChange={onCollectionChange}
                                                    placeholder="????????? ????????? ??????????????????."

                                                />
                                                <Select
                                                    name="totalAmountUnit"
                                                    value={addCollectionInfo.totalAmountUnit}
                                                    onChange={onCollectionChange}
                                                >
                                                    <option value="KRW">KRW</option>
                                                    <option value="BTN">BTN</option>
                                                    <option value="ETH">ETH</option>
                                                </Select>
                                            </InputBox>
                                        </Td>
                                        <Td>??? ????????????</Td>
                                        <Td>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.totalTransactionAmount}
                                                    name="totalTransactionAmount"
                                                    onChange={onCollectionChange}
                                                    placeholder="??? ??????????????? ??????????????????."

                                                />
                                                <Select
                                                    name="totalTransactionAmountUnit"
                                                    value={addCollectionInfo.totalTransactionAmountUnit}
                                                    onChange={onCollectionChange}
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
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.linkUrl}
                                                    name="linkUrl"
                                                    onChange={onCollectionChange}
                                                    placeholder="?????? URL??? ??????????????????."

                                                />
                                            </InputBox>
                                        </Td>
                                    </tr>
                                </tbody>
                            </CollectionTable>
                        </CollectionForm>

                        <ButtonGroup>
                            <Button
                                title="??????"
                                width={120}
                                height={38}
                                fontColor={colors.darkBlueColor}
                                bgColor={colors.whiteColor}
                                border={`1px solid ${colors.darkBlueColor}`}
                                onClick={handleCancel}
                            />
                            <Button
                                title="??????"
                                width={120}
                                height={38}
                                fontColor={colors.whiteColor}
                                bgColor={colors.darkBlueColor}
                                margin="0 0 0 20px"
                                onClick={handleAddCollection}
                            />
                        </ButtonGroup>
                    </>
                }

            </Wrapper>


        </ContentBox>
    )
}

export default NftPresentation;