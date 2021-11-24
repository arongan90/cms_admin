import React from 'react';
import Box from '@mui/material/Box';
import styled, {css} from "styled-components";
import HeaderContent from "../../components/share/HeaderContent";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {ko} from 'date-fns/locale';
import {TextField} from "@mui/material";
import colors from "../../styles/colors";
import Button from "../../components/share/Button";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paging from "../../components/share/Paging";
import {useHistory} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import ContentBox from "../../components/share/ContentBox";

const Wrapper = styled.div`
  padding: 20px;
`;
const SearchForm = styled.div`
  margin: 30px auto 80px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
  text-align: center;
`;
const MemberListBox = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  a {
    color: inherit;
  }

  .MuiTableCell-head {
    padding: 10px;
    background: ${colors.ultraLightGray};
  }

  .MuiTablePagination-selectLabel,
  .MuiTablePagination-displayedRows,
  .css-16c50h-MuiInputBase-root-MuiTablePagination-select {
    display: none;
  }

  .css-jxl0bs-MuiToolbar-root-MuiTablePagination-toolbar {
    width: 600px;
    margin: 0 auto;
  }

  .css-jxl0bs-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
const SearchTable = styled.table`
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

  // DatePicker Style
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
const Input = styled.input`
  width: ${({fullWidth}) => fullWidth ? 340 : 160}px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid ${colors.borderColor};
`;
const Select = styled.select`
  width: ${({width}) => width ? width : 200}px;
  height: 35px;
  padding: 5px 10px;
  border: 1px solid ${colors.borderColor};
  outline: none;
  color: ${colors.darkGrayColor};
  background: ${colors.deepWhiteColor};
  margin: ${({margin}) => margin ? margin : 0};
  cursor: pointer;
`;
const PortfolioBox = styled.div`
  display: flex;
  align-items: center;
`;
const NumberInputBox = styled.div`
  width: 160px;
  height: 35px;
  padding: 0 8px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.borderColor};
  color: ${colors.grayColor};
  font-size: 14px;

  ${({margin}) => margin && css`
    margin: ${({margin})};
  `}
`;
const NumberInput = styled.input`
  width: 75%;
  height: 100%;
  border: none;
`;
const ListLengthSelectBox = styled.div`
  text-align: right;
  color: ${colors.blackColor};
  font-size: 16px;
  font-weight: bold;
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;

const MemberPresentational = ({
                                  tabMenu,
                                  handleTabMenu,
                                  memberTableColumns,
                                  memberData,
                                  memberList,
                                  loading,
                                  error,
                                  currentPage,
                                  rowsPerPage,
                                  handleChangePage,
                                  handleChangeRowsPerPage,
                                  searchInput,
                                  onSearchChange,
                                  onDateChange
                              }) => {

    const history = useHistory();
    if (error) return (<div>에러발생!!</div>);
    if (!memberData) return null;

    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="회원 관리"
                tabList={["회원 목록"]}
            />

            {loading && (
                <Box sx={{display: 'flex'}} style={{
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <CircularProgress/>
                </Box>
            )}

            <Wrapper>
                <SearchForm>
                    <SearchTable>
                        <tbody>
                        <tr>
                            <Td>가입일</Td>
                            <Td>
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                                    <DatePicker
                                        label="시작일"
                                        mask="____.__.__"
                                        inputFormat="yyyy.MM.dd"
                                        value={searchInput.startDate}
                                        onChange={value => onDateChange(value, "startDate")}
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
                                        value={searchInput.finishDate}
                                        onChange={value => onDateChange(value, "finishDate")}
                                        renderInput={(params) => {
                                            params.inputProps.placeholder = "yyyy.mm.dd";
                                            return (<TextField {...params} />
                                            )
                                        }}
                                    />
                                </LocalizationProvider>
                            </Td>
                            <Td>이메일 주소</Td>
                            <Td>
                                <Input
                                    name="email"
                                    fullWidth
                                    placeholder="이메일 주소를 입력해주세요."
                                    value={searchInput.email}
                                    onChange={onSearchChange}
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td>이름</Td>
                            <Td>
                                <Input
                                    name="name"
                                    fullWidth
                                    placeholder="아름을 입력해주세요."
                                    value={searchInput.name}
                                    onChange={onSearchChange}
                                />
                            </Td>
                            <Td>가입방식</Td>
                            <Td>
                                <Select
                                    name="joinType"
                                    onChange={onSearchChange}
                                    value={searchInput.joinType}
                                >
                                    <option value="all">전체</option>
                                    <option value="email">이메일</option>
                                    <option value="kakao">카카오</option>
                                    <option value="facebook">페이스북</option>
                                    <option value="google">구글</option>
                                </Select>
                            </Td>
                        </tr>
                        <tr>
                            <Td>포트폴리오 자산</Td>
                            <Td>
                                <PortfolioBox>
                                    <NumberInputBox>
                                        <NumberInput
                                            type="number"
                                            name="portfolioAssetsFinish"
                                            value={searchInput.portfolioAssetsFinish}
                                            onChange={onSearchChange}
                                        />
                                        만원
                                    </NumberInputBox>
                                    &nbsp;~&nbsp;
                                    <NumberInputBox>
                                        <NumberInput
                                            type="number"
                                            name="portfolioAssetsFinish"
                                            value={searchInput.portfolioAssetsFinish}
                                            onChange={onSearchChange}
                                        />
                                        만원
                                    </NumberInputBox>
                                </PortfolioBox>
                            </Td>
                            <Td>14세 미만</Td>
                            <Td>
                                <Select
                                    name="age14"
                                    value={searchInput.age14}
                                    onChange={onSearchChange}
                                >
                                    <option value="up">14 이상</option>
                                    <option value="down">14 미만</option>
                                </Select>
                            </Td>
                        </tr>
                        </tbody>
                    </SearchTable>

                    <Button
                        width={120}
                        height={45}
                        fontSize={18}
                        bgColor={colors.activeBlue}
                        fontColor={colors.whiteColor}
                        title="찾기"
                        margin="30px 0 10px"
                    />
                </SearchForm>

                <MemberListBox>
                    <Paper sx={{width: '100%', paddingBottom: 5, border: `1px solid ${colors.borderColor}`}}>
                        <ListLengthSelectBox>
                            페이지 당 :
                            <Select width={60} onChange={handleChangeRowsPerPage} margin="20px 10px">
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </Select>
                        </ListLengthSelectBox>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {memberTableColumns && memberTableColumns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    width: column.width,
                                                    border: column.border,
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {memberList && memberList
                                        .map(member => {
                                            return (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key={member.id}
                                                    onClick={() => history.push(`/memberDetail/${member.num}`)}
                                                >
                                                    {memberTableColumns.map((column) => {
                                                        const value = member[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number' || typeof value === 'object'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );

                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <PagingBox>
                            <Paging
                                currentPage={currentPage}
                                totalItemsCount={memberData && memberData.length}
                                onChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                            />
                        </PagingBox>
                    </Paper>
                </MemberListBox>
            </Wrapper>
        </ContentBox>
    )
}

export default MemberPresentational;