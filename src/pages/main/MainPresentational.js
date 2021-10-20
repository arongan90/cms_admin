import React from 'react';
import styled from "styled-components";
import colors from "../../styles/Colors";
import HeaderContent from '../../components/share/HeaderContent';
import TableContent from '../../components/share/TableContent';
import Select from '../../components/share/Select';
import Input from '../../components/share/Input';
import CostumeButton from "../../components/share/Button";
import AddMember from "../../components/main/AddMember";
import Box from '@mui/material/Box';
import { Modal } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ko } from 'date-fns/locale';
// import Grid from "@mui/material/Grid";
// import SearchIcon from "@mui/icons-material/Search";
// import AppBar from "@mui/material/AppBar";


const SearchBox = styled.div`
  width: 100%;
  padding-top: 10px;
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
  
  // Input Style
  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px;
    padding: 0 10px;
  }
  .css-bkqowc-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 0;
  }
  .css-aqhoke-MuiFormLabel-root-MuiInputLabel-root {
    top: -9px;
    font-size: 14px;
  }
`;
const RightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
`;
const ButtonGroup = styled.div`
  margin-left: 10px;
`;
const Title = styled.div`
  min-width: 80px;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.lightBlack};
  line-height: 2.2;
  margin-right: 10px;
`;
const ModalWrapper = styled.div`
  max-width: 1200px;
  padding: 30px;
  margin: 2% auto;
  border-radius: 10px;
  background: ${colors.backgroundColor};
`;

const MainPresentational = ({
                                corpList,
                                searchDate,
                                usedPeriod,
                                memberInfo,
                                onLogout,

                                tabMenu,
                                handleTabMenu,
                                openAddress,
                                setOpenAddress,
                                serviceType,
                                setServiceType,
                                searchType,
                                handleSearchType,
                                searchText,
                                handleSearchText,

                                handleDrawerToggle,
                                handleGoodsType,
                                handleSetDate,
                                handleDateChange,
                                handleAddressComplete,
                                infoInputChange,

                                handleSearch,
                                handleRefresh,

                                unionService,
                                handleUnionService,

                                // 모달 props
                                modalVisible,
                                handleModalOpen,
                                handleModalClose,
                                updateCorpData,
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
                title="회원 관리"
                tabList={["회원 목록", "회원 추가"]}
            />
            {tabMenu === 0
                ?
                <Box component="main">
                    <SearchBox>
                        <SearchLine>
                            <LeftBox>
                                <Title>기간 검색</Title>
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                    <DatePicker
                                        label="시작일"
                                        mask="____.__.__"
                                        inputFormat="yyyy.MM.dd"
                                        value={searchDate.start}
                                        onChange={newValue => handleDateChange(newValue, 'START')}
                                        renderInput={(params) => {
                                            params.inputProps.placeholder = "yyyy.mm.dd";
                                            return (<TextField { ...params } />
                                            )}}
                                    />
                                </LocalizationProvider>
                                &nbsp;~&nbsp;
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                    <DatePicker
                                        label="종료일"
                                        mask="____.__.__"
                                        inputFormat="yyyy.MM.dd"
                                        value={searchDate.finish}
                                        onChange={newValue => handleDateChange(newValue, 'FINISH')}
                                        renderInput={(params) => {
                                            params.inputProps.placeholder = "yyyy.mm.dd";
                                            return (<TextField { ...params } />
                                            )}}
                                    />
                                </LocalizationProvider>

                                <ButtonGroup>
                                    <CostumeButton
                                        width={50}
                                        height={35}
                                        title="오늘"
                                        type="TODAY"
                                        borderRadius="none"
                                        border={`1px solid ${colors.borderColor}`}
                                        bgColor={colors.whiteColor}
                                        onClick={handleSetDate}
                                    >
                                    </CostumeButton>
                                    <CostumeButton
                                        width={50}
                                        height={35}
                                        title="어제"
                                        type="YESTERDAY"
                                        borderRadius="none"
                                        border={`1px solid ${colors.borderColor}`}
                                        bgColor={colors.whiteColor}
                                        onClick={handleSetDate}
                                    >
                                    </CostumeButton>
                                    <CostumeButton
                                        width={50}
                                        height={35}
                                        title="일주일"
                                        type="WEEK"
                                        borderRadius="none"
                                        border={`1px solid ${colors.borderColor}`}
                                        bgColor={colors.whiteColor}
                                        onClick={handleSetDate}
                                    >
                                    </CostumeButton>
                                    <CostumeButton
                                        width={50}
                                        height={35}
                                        title="지난달"
                                        type="LAST_MONTH"
                                        borderRadius="none"
                                        border={`1px solid ${colors.borderColor}`}
                                        bgColor={colors.whiteColor}
                                        onClick={handleSetDate}
                                    >
                                    </CostumeButton>
                                    <CostumeButton
                                        width={50}
                                        height={35}
                                        title="1개월"
                                        type="ONE_MONTH"
                                        borderRadius="none"
                                        border={`1px solid ${colors.borderColor}`}
                                        bgColor={colors.whiteColor}
                                        onClick={handleSetDate}
                                    >
                                    </CostumeButton>
                                    <CostumeButton
                                        width={50}
                                        height={35}
                                        title="3개월"
                                        type="THREE_MONTH"
                                        borderRadius="none"
                                        border={`1px solid ${colors.borderColor}`}
                                        bgColor={colors.whiteColor}
                                        onClick={handleSetDate}
                                    >
                                    </CostumeButton>
                                    <CostumeButton
                                        width={50}
                                        height={35}
                                        title="전체"
                                        type="ALL"
                                        borderRadius="none"
                                        border={`1px solid ${colors.borderColor}`}
                                        bgColor={colors.whiteColor}
                                        onClick={handleSetDate}
                                    >
                                    </CostumeButton>
                                </ButtonGroup>
                            </LeftBox>
                        </SearchLine>
                        <SearchLine>
                            <LeftBox>
                                <Title>검색어</Title>
                                <Select
                                    width={15}
                                    onChange={handleSearchType}
                                    searchType={searchType}
                                    options={['회사명', '사업자 번호', '사업자명', '상품 타입']}
                                />
                                <Input
                                    width={74}
                                    value={searchText}
                                    onChange={handleSearchText}
                                    onKeyPress={handleSearch}
                                    margin="0 10px 0 10px"
                                    placeholder="검색할 회사의 정보를 입력해주세요."
                                />
                            </LeftBox>
                            <RightBox>
                                <Button variant="contained" sx={{mr: 1}} onClick={handleSearch}>
                                    Search
                                </Button>
                                <Tooltip title="Reload" onClick={handleRefresh}>
                                    <IconButton>
                                        <RefreshIcon color="inherit" sx={{display: 'block'}}/>
                                    </IconButton>
                                </Tooltip>
                            </RightBox>
                        </SearchLine>
                    </SearchBox>

                    <TableContent
                        corpList={corpList}
                        handleModalOpen={handleModalOpen}
                    />
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
                    unionService={unionService}
                    handleUnionService={handleUnionService}
                    handleSetDate={handleSetDate}
                />
            }


            <Modal
                open={modalVisible}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ModalWrapper>
                    <AddMember
                        updateCorpData={updateCorpData}
                        modalVisible={modalVisible}
                        handleModalClose={handleModalClose}
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
                        unionService={unionService}
                        handleUnionService={handleUnionService}
                        handleSetDate={handleSetDate}
                    />
                </ModalWrapper>
            </Modal>

        </Box>
    );
}

export default MainPresentational;