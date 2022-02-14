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
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1550px;
  min-height: calc(100vh - 144px);
`;
const ButtonGroup = styled.div`
  margin: 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .css-1ufqgrx-MuiToggleButtonGroup-root {
    background-color: ${colors.whiteColor} !important;
    border-radius: 0 !important;
  }
`;
const StyledToggleButton = styled(ToggleButton)`
  height: 35px;
  border-radius: 0 !important;
`;
const TableBox = styled.div`
  min-height: calc(100vh - 300px);
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

const TabPanel = props => {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const TradePresentation = ({
                               tabMenu,
                               handleTabMenu,
                               addTradeInput,
                               onInputChange,
                               onCancel,
                               onAddTrade,
                           }) => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => setValue(newValue);
    const handleChangeIndex = (index) => setValue(index);

    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="거래소"
                tabList={["거래소 목록", "거래소 추가"]}
            />
            <Wrapper>
                {tabMenu === 0 ?
                    <Box sx={{bgcolor: colors.whiteColor, width: '100%'}}>
                        <AppBar position="static" sx={{ bgcolor: colors.darkBlueColor}}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="inherit"
                                variant="standard"
                                aria-label="standard tabs example"
                            >
                                <Tab label="스팟"/>
                                <Tab label="DEX"/>
                                <Tab label="파생상품"/>

                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
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
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
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
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
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
                            </TabPanel>

                        </SwipeableViews>
                    </Box>
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