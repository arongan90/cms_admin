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
  border-radius: 8px;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const ButtonGroup = styled.div`
  margin: 20px 20px 40px;
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
  margin: 10px 20px;
`;
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
                title="NFT 콜렉션"
                tabList={["콜렉션 목록", "콜렉션 추가"]}
            />
            <Wrapper>
                {tabMenu === 0 ?
                    <>
                        <ButtonGroup>
                            <Button
                                width={120}
                                height={38}
                                title="콜렉션 추가"
                                bgColor={colors.deepNavyColor}
                                fontColor={colors.whiteColor}
                                fontSize={16}
                                fontWeight={600}
                                onClick={() => handleTabMenu(1)}
                            />
                        </ButtonGroup>
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
                    </>
                    :
                    <>
                        <Title>NFT콜렉션 추가</Title>
                        <CollectionForm>
                            <CollectionTable>
                                <tbody>
                                    <tr>
                                        <Td>콜렉션명</Td>
                                        <Td>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.collectionName}
                                                    name="collectionName"
                                                    onChange={onCollectionChange}
                                                    placeholder="콜렉션명을 입력해주세요."

                                                />
                                            </InputBox>
                                        </Td>
                                        <Td>자산 수</Td>
                                        <Td>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.assetsCount}
                                                    name="assetsCount"
                                                    onChange={onCollectionChange}
                                                    placeholder="자산 수를 입력해주세요."

                                                />
                                            </InputBox>
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Td>콜렉션 총액</Td>
                                        <Td>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.totalAmount}
                                                    name="totalAmount"
                                                    onChange={onCollectionChange}
                                                    placeholder="콜렉션 총액을 입력해주세요."

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
                                        <Td>총 거래금액</Td>
                                        <Td>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.totalTransactionAmount}
                                                    name="totalTransactionAmount"
                                                    onChange={onCollectionChange}
                                                    placeholder="총 거래금액을 입력해주세요."

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
                                        <Td>링크 URL</Td>
                                        <Td colSpan={3}>
                                            <InputBox>
                                                <Input
                                                    value={addCollectionInfo.linkUrl}
                                                    name="linkUrl"
                                                    onChange={onCollectionChange}
                                                    placeholder="링크 URL을 입력해주세요."

                                                />
                                            </InputBox>
                                        </Td>
                                    </tr>
                                </tbody>
                            </CollectionTable>
                        </CollectionForm>

                        <ButtonGroup>
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
                                title="추가"
                                width={120}
                                height={50}
                                fontSize={18}
                                fontWeight={600}
                                fontColor={colors.whiteColor}
                                bgColor={colors.activeBlue}
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