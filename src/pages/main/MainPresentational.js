import React, {useEffect} from 'react';
import styled, {css} from "styled-components";
import colors from "../../styles/colors";
import HeaderContent from '../../components/share/HeaderContent';
import TableContent from '../../components/share/TableContent';
import Select from '../../components/share/Select';
import Input from '../../components/share/Input';
import CostumeButton from "../../components/share/Button";
import AddMember from "../../components/main/AddMember";
import Box from '@mui/material/Box';
import {Modal} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {ko} from 'date-fns/locale';
import Autocomplete from '@mui/material/Autocomplete';
// import Grid from "@mui/material/Grid";
// import SearchIcon from "@mui/icons-material/Search";
// import AppBar from "@mui/material/AppBar";
// import Tooltip from "@mui/material/Tooltip";
// import IconButton from "@mui/material/IconButton";

const SearchBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
  border-radius: 8px;
`;
const SearchLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify ? justify : 'flex-start'};
  padding: 11px 16px;
  border-bottom: 1px solid ${colors.shadowColor};

  &:last-child {
    border-bottom: none;
  }

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

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 175px;
  }
`;
const ButtonGroup = styled.div`
  margin-left: 10px;
`;
const Title = styled.div`
  min-width: 100px;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.lightBlack};
  line-height: 2.2;
  margin-right: 10px;
`;
const ModalWrapper = styled.div`
  max-width: 1200px;
  height: 90vh;
  overflow-y: scroll;
  padding: 0 30px;
  margin: 4% auto;
  border-radius: 8px;
  background: ${colors.backgroundColor};
  box-shadow: 0 5px 8px 1px ${colors.darkGrayColor};

  &::-webkit-scrollbar {
    display: none;
  }
`;
const InputWrapper = styled.div`
  width: 49%;
  position: relative;
  margin-left: 10px;

  .css-1kalb4l-MuiInputBase-root-MuiOutlinedInput-root {
    height: 35px;
    border-radius: 0;
  }

  .css-aqhoke-MuiFormLabel-root-MuiInputLabel-root {
    top: -8px;
  }

  .css-1kpdewa-MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input {
    padding: 0;
    height: 100%;
  }
`;
const SearchViewBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 34px;
  width: 100%;
  border: 1px solid ${colors.borderColor};
  background: ${colors.whiteColor};
`;
const SearchView = styled.div`
  padding: 5px 10px;
  cursor: pointer;

  ${({active}) => active && css`
    color: ${colors.activeBlue};
  `}
  &:hover {
    color: ${colors.activeBlue};
  }
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
                                initialList,
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
                                onLogoChange,
                                // 모달 props
                                modalVisible,
                                handleModalOpen,
                                handleModalClose,
                                updateCorpData,
                                onMemberRegister,
                                // AutoComplete
                                keyword,
                                results,
                                updateField,
                                updateText,
                                resultsArr,
                            }) => {
    // 가입일, 만료일, 계약일
    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
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
                <Box component="main" sx={{paddingBottom: 1}}>
                    <SearchBox>
                        <SearchLine>
                            <Title>키워드 검색</Title>
                            <Select
                                width={15}
                                onChange={handleSearchType}
                                searchType={searchType}
                                options={['회사명', '사업자 번호', '사업자명', '상품 유형']}
                            />
                            <InputWrapper>
                                <Autocomplete
                                    autoComplete
                                    autoSelect
                                    inputValue={searchText}
                                    options={initialList}
                                    onChange={(e, result) => handleSearchText(e, result)}
                                    onKeyUp={e => e.key === "Enter" && handleSearch(e)}
                                    getOptionLabel={opt => {
                                        return (
                                            ((!!opt && searchType === '회사명') ? opt.bizName : '') ||
                                            ((!!opt && searchType === '사업자 번호') ? opt.bizNumber : '') ||
                                            ((!!opt && searchType === '사업자명') ? opt.ceoName : '') || ''
                                        )
                                    }}
                                    renderInput={params => (
                                        <TextField
                                            {...params}
                                            label={
                                                (searchType === '회사명' && '검색할 회사의 이름을 입력해주세요.') ||
                                                (searchType === '사업자 번호' && '검색할 회사의 사업자번호를 입력해주세요.') ||
                                                (searchType === '사업자명' && '검색할 회사의 사업자명을 입력해주세요.') ||
                                                (searchType === '상품 유형' && '검색할 상품의 유형을 입력해주세요.')
                                            }
                                        />
                                    )}
                                />
                            </InputWrapper>
                        </SearchLine>
                        <SearchLine>
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
                                        return (<TextField {...params} />
                                        )
                                    }}
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
                                        return (<TextField {...params} />
                                        )
                                    }}
                                />
                            </LocalizationProvider>

                            <ButtonGroup>
                                <CostumeButton
                                    width={54}
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
                                    width={54}
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
                                    width={54}
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
                                    width={54}
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
                                    width={54}
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
                                    width={54}
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
                                    width={54}
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
                        </SearchLine>
                        <SearchLine justify="center">
                            <Button variant="contained" sx={{mr: 3, fontSize: 16}} onClick={handleSearch}
                                    startIcon={<SearchIcon sx={{color: colors.whiteColor}}/>}>
                                검색
                            </Button>
                            <Button variant="outlined" sx={{fontSize: 16, fontWeight: 600}} onClick={handleRefresh}
                                    startIcon={<RefreshIcon sx={{color: colors.activeBlue}}/>}>
                                초기화
                            </Button>
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
                    onLogoChange={onLogoChange}
                    onMemberRegister={onMemberRegister}
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
                        onLogoChange={onLogoChange}
                        onMemberRegister={onMemberRegister}
                    />
                </ModalWrapper>
            </Modal>

        </Box>
    );
}

export default MainPresentational;