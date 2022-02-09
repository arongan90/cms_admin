import React from 'react';
import styled from 'styled-components';
import colors from "../../../styles/colors";
import Box from '@mui/material/Box';
import HeaderContent from "../../../components/share/HeaderContent";
import SearchForm from "../../../components/share/SearchForm";
import Paper from "@mui/material/Paper";
import Paging from "../../../components/share/Paging";
import ListTable from "../../../components/share/Table/ListTable";
import ContentBox from "../../../components/share/ContentBox";
import Button from "../../../components/share/Button";
import CryptocurrencyColumnTable from "../../../components/feature/Cryptocurrency/CryptocurrencyColumnTable";

const Wrapper = styled.div`
  padding: 20px;
`;
const IcoListBox = styled.div`
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const ListLengthSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 0 30px;
`;
const SelectBox = styled.div`
  color: ${colors.lightBlack};
  font-size: 16px;
  font-weight: bold;
`;
const Select = styled.select`
  width: ${({width}) => width ? width : 200}px;
  padding: 5px 10px;
  border: 1px solid ${colors.borderColor};
  outline: none;
  color: ${colors.darkGrayColor};
  background: ${colors.deepWhiteColor};
  margin: ${({margin}) => margin ? margin : 0};
  cursor: pointer;
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;
const ButtonGroup = styled.div`
  text-align: right;
  margin: 50px 0 100px;
`;

const CoinInfoPresentation = ({
                                  tabMenu,
                                  handleTabMenu,

                                  coinInfoColumns,
                                  coinList,
                                  searchCoinName,
                                  onCoinNameChange,

                                  currentPage,
                                  rowsPerPage,
                                  handleChangePage,
                                  handleChangeRowsPerPage,

                                  addCoinState,
                                  onCoinChange,
                                  chipState,
                                  handleAddChips,
                                  handleDeleteChips,

                                  onCancel,
                                  onSave,
                              }) => {

    console.info('searchCoinName ::::: ', searchCoinName);

    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="코인 정보"
                tabList={["코인 목록", "코인 추가"]}
            />
            {tabMenu === 0 ?
                <Wrapper>
                    <SearchForm
                        value={searchCoinName}
                        onChange={onCoinNameChange}
                    />

                    <IcoListBox>
                        <Paper sx={{width: '100%', paddingBottom: 5, border: `1px solid ${colors.borderColor}`, borderRadius: '4px'}}>
                            <ListLengthSelectBox>
                                <SelectBox>
                                    <Select width={150} margin="20px 10px">
                                        <option value={5}>시가 총액 순위</option>
                                        <option value={5}>스포트라이트</option>
                                        <option value={10}>DeFi</option>
                                        <option value={20}>NFT</option>
                                    </Select>
                                </SelectBox>
                                <SelectBox onChange={handleChangeRowsPerPage}>
                                    페이지 당 :
                                    <Select width={70} margin="20px 10px">
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                    </Select>
                                </SelectBox>
                            </ListLengthSelectBox>

                            {/* 코인 목록 데이터 */}
                            <ListTable
                                tableHeadColumns={coinInfoColumns}
                                coinList={coinList}
                            />

                            <PagingBox>
                                <Paging
                                    currentPage={currentPage}
                                    totalItemsCount={coinList && coinList.length}
                                    onChange={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                />
                            </PagingBox>
                        </Paper>
                    </IcoListBox>
                </Wrapper>
                :
                <Wrapper>
                    <CryptocurrencyColumnTable
                        coinState={addCoinState}
                        onCoinChange={onCoinChange}
                        chipState={chipState}
                        handleAddChips={handleAddChips}
                        handleDeleteChips={handleDeleteChips}
                    />
                    <ButtonGroup>
                        <Button
                            width={120}
                            height={38}
                            border={`1px solid ${colors.deepNavyColor}`}
                            bgColor={colors.whiteColor}
                            fontColor={colors.deepNavyColor}
                            fontSize={20}
                            title="취소"
                            onClick={onCancel}
                        />
                        <Button
                            width={120}
                            height={38}
                            bgColor={colors.deepNavyColor}
                            fontColor={colors.whiteColor}
                            fontSize={20}
                            margin="0 0 0 20px"
                            title="저장"
                            onClick={onSave}
                        />
                    </ButtonGroup>
                </Wrapper>
            }

        </ContentBox>
    )
}

export default CoinInfoPresentation;