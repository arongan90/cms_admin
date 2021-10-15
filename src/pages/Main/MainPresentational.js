import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import colors from "../../styles/Colors";
import HeaderContent from '../../components/share/HeaderContent';
import TableContent from '../../components/share/TableContent';
import Select from '../../components/share/Select';
import Input from '../../components/share/Input';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AddMember from "../../components/main/AddMember";
// import Grid from "@mui/material/Grid";
// import SearchIcon from "@mui/icons-material/Search";
// import AppBar from "@mui/material/AppBar";

const SearchBox = styled.div`
  width: 100%;
  height: 228px;
  max-width: 1200px;
  margin: 30px auto;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
  border-radius: 8px;
`;
const SearchLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid ${colors.borderColor};
  
  &:last-child {
    border-bottom: none;
  }
`;
const LeftBox = styled.div`
  width: ${({ width }) => width ? '88%' : '100%'};
  display: flex;
  align-items: center;
  
  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px;
    padding: 0 10px;
  }
  .css-bkqowc-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 0;
  }
`;
const RightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
`;

const Title = styled.div`
  min-width: 80px;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.lightBlack};
  line-height: 2.2;
  margin-right: 10px;
`;

const MainPresentational = ({
                                handleDrawerToggle,
                                corpList,
                                searchDate,
                                usedPeriod,
                                handleSearchType,
                                handleGoodsType,
                                handleDateChange,
                                serviceType,
                                setServiceType,
                                onLogout,
                                tabMenu,
                                handleTabMenu,
                                openAddress,
                                setOpenAddress,
                                handleAddressComplete,
                                memberInfo,
                                infoInputChange,
                            }) => {

    // 가입일, 만료일, 계약일

    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            overflow: 'scroll',
            bgcolor: '#eaeff1'
        }}>
            <HeaderContent
                onDrawerToggle={handleDrawerToggle}
                onLogout={onLogout}
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
            />
            {tabMenu === 0
                ?
                <Box component="main">
                    <SearchBox>
                        <SearchLine>
                            <LeftBox>
                                <Title>기간검색</Title>
                                <Input
                                    width={50}
                                    placeholder="검색할 회사의 정보를 입력해주세요."
                                />
                            </LeftBox>
                        </SearchLine>
                        <SearchLine>
                            <LeftBox>
                                <Title>기간검색</Title>
                                <Input
                                    width={50}
                                    placeholder="검색할 회사의 정보를 입력해주세요."
                                />
                            </LeftBox>
                        </SearchLine>
                        <SearchLine>
                            <LeftBox>
                                <Title>기간 설정</Title>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="시작 날짜"
                                        value={searchDate.start}
                                        onChange={newValue => handleDateChange(newValue, 'START')}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                &nbsp;~&nbsp;
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="죵료 날짜"
                                        value={searchDate.finish}
                                        onChange={newValue => handleDateChange(newValue, 'FINISH')}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </LeftBox>
                        </SearchLine>
                        <SearchLine>
                            <LeftBox>
                                <Title>검색어</Title>
                                <Select
                                    width={15}
                                    onChange={handleSearchType}
                                    options={['회사명', '사업자 번호', '사업자명', '상품 타입']}
                                />
                                <Input
                                    width={70}
                                    margin="0 10px 0 10px"
                                    placeholder="검색할 회사의 정보를 입력해주세요."
                                />
                            </LeftBox>
                            <RightBox>
                                <Button variant="contained" sx={{mr: 1}}>
                                    Search
                                </Button>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <RefreshIcon color="inherit" sx={{display: 'block'}}/>
                                    </IconButton>
                                </Tooltip>
                            </RightBox>
                        </SearchLine>
                    </SearchBox>
                    <TableContent corpList={corpList}/>
                </Box>
                :
                <AddMember
                    usedPeriod={usedPeriod}
                    handleDateChange={handleDateChange}
                    handleGoodsType={handleGoodsType}
                    serviceType={serviceType}
                    setServiceType={setServiceType}
                    openAddress={openAddress}
                    setOpenAddress={setOpenAddress}
                    handleAddressComplete={handleAddressComplete}
                    memberInfo={memberInfo}
                    infoInputChange={infoInputChange}
                />
            }

        </Box>
    );
}

export default MainPresentational;