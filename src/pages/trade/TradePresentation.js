import React, {useState} from 'react';
import ContentBox from "../../components/share/ContentBox";
import HeaderContent from "../../components/share/HeaderContent";
import styled from "styled-components";
import colors from "../../styles/colors";
import Button from "../../components/share/Button";
import Table from "@mui/material/Table";
import {TableHead, TableBody, TableCell, TableRow} from "@mui/material";
import TradeTableRow from "../../components/feature/Trade/TradeTableRow";
import Paging from "../../components/share/Paging";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import AddTrade from "../../components/feature/Trade/AddTrade";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
  min-height: calc(100vh - 144px);
`;
const ButtonGroup = styled.div`
  margin: 20px 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .css-1ufqgrx-MuiToggleButtonGroup-root,
  .css-fhsron-MuiButtonBase-root-MuiToggleButton-root {
    border-radius: 4px;
  }
  .MuiButtonBase-root {
    background-color: ${colors.whiteColor};
    height: 38px;
  }
`;
const TableBox = styled.div`
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  th {
    text-align: center;
    background-color: ${colors.ultraLightGray};
  }
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;

const TradePresentation = ({
                               tabMenu,
                               handleTabMenu,
                               addTradeInput,
                               onInputChange,
                               onCancel,
                               onAddTrade,
                           }) => {

    const [alignment, setAlignment] = React.useState('spot');


    const handleChange = (e, newValue) => {
        if (!newValue) return;
        setAlignment(newValue);
    }

    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="거래소"
                tabList={["거래소 목록", "거래소 추가"]}
            />
            <Wrapper>
                {tabMenu === 0 ? (
                        <>
                            <ButtonGroup>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton value="spot">스팟</ToggleButton>
                                    <ToggleButton value="dex">DEX</ToggleButton>
                                    <ToggleButton value="derivative">파생상품</ToggleButton>
                                </ToggleButtonGroup>

                                <Button
                                    title="거래소 추가"
                                    width={120}
                                    height={38}
                                    fontColor={colors.whiteColor}
                                    bgColor={colors.darkBlueColor}
                                    fontSize={16}
                                    fontWeight={600}
                                    onClick={() => handleTabMenu(1)}
                                />
                            </ButtonGroup>

                            {alignment === "spot" && (
                                <>
                                    <TableBox>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>순위</TableCell>
                                                    <TableCell>거래소</TableCell>
                                                    <TableCell>신뢰 점수</TableCell>
                                                    <TableCell align="right">24시간 거래량 (₩)</TableCell>
                                                    <TableCell>7일 방문</TableCell>
                                                    <TableCell>마켓</TableCell>
                                                    <TableCell>코인</TableCell>
                                                    <TableCell>지원화폐</TableCell>
                                                    <TableCell>최근 7일 거래량 </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {/*  data.map  */}
                                                <TradeTableRow
                                                    // 순위
                                                    // 거래소
                                                    // 신뢰점수
                                                    // _24시간거래량
                                                    // 퍼센트
                                                    // _7일방문
                                                    // 마켓
                                                    // 코인
                                                    // 지원화폐
                                                    // graph
                                                />
                                            </TableBody>
                                        </Table>
                                    </TableBox>
                                    <PagingBox>
                                        <Paging
                                            // currentPage={currentPage}
                                            // totalItemsCount={collectionList && collectionList.length}
                                            // onChange={handleChangePage}
                                            // rowsPerPage={10}
                                        />
                                    </PagingBox>
                                </>
                            )}

                            {alignment === "dex1" && (
                                <>

                                </>
                            )}

                            {alignment === "derivative" && (
                                <>

                                </>
                            )}
                        </>)
                    :
                    <AddTrade
                        addTradeInput={addTradeInput}
                        onInputChange={onInputChange}
                        onCancel={onCancel}
                        onAddTrade={onAddTrade}
                    />
                }

            </Wrapper>
        </ContentBox>
    )
}

export default TradePresentation;