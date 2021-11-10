import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import HeaderContent from "../../components/share/HeaderContent";
import colors from "../../styles/colors";
import Button from "../../components/share/Button";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paging from "../../components/share/Paging";
import {useHistory} from "react-router-dom";
import StarGraph from "../../components/feature/IcoInfo/StarGraph";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ColumnTable from "../../components/feature/IcoInfo/ColumnTable";

const Wrapper = styled.div`
  padding: 20px;
`;
const SearchForm = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  margin: 30px 0;
  background: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const Title = styled.div`
  font-size: 20px;
  color: ${colors.lightBlack};
  margin-right: 50px;
`;
const InputBox = styled.input`
  width: 35%;
  height: 45px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${colors.borderColor};
  margin-right: 10px;
`;
const ListLengthSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 0 30px;
`;
const SelectBox = styled.div`
  color: ${colors.blackColor};
  font-size: 16px;
  font-weight: bold;
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
const IcoListBox = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const ProgressBox = styled.div`
  button {
    padding: 11px 18px;
  }
`;

const IcoPresentation = ({
                             tabMenu,
                             handleTabMenu,
                             searchCoinName,
                             onCoinNameChange,
                             currentPage,
                             rowsPerPage,
                             handleChangePage,
                             handleChangeRowsPerPage,
                             icoTableColumns,
                             icoList,
                             // ICO 추가
                             addIcoState,
                             onIcoChange,
                             onDateChange,
                         }) => {
    const history = useHistory();
    const [alignment, setAlignment] = React.useState('all');

    const handleChange = (event, newAlignment) => {
        if (!newAlignment) return;
        setAlignment(newAlignment);
    };

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
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="ICO 정보"
                tabList={["ICO 목록", "ICO 추가"]}
            />
            {tabMenu === 0 ?
                <Wrapper>
                    <SearchForm>
                        <Title>코인명</Title>
                        <InputBox
                            value={searchCoinName}
                            onChange={onCoinNameChange}
                            placeholder="검색할 코인명을 입력해주세요."
                        />
                        <Button
                            width={100}
                            height={45}
                            title="찾기"
                            bgColor={colors.activeBlue}
                            fontColor={colors.whiteColor}
                            fontSize={18}
                            fontWeight={600}
                        />
                    </SearchForm>

                    <IcoListBox>
                        <Paper sx={{width: '100%', paddingBottom: 5, border: `1px solid ${colors.borderColor}`}}>
                            <ListLengthSelectBox>
                                <ProgressBox>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={alignment}
                                        exclusive
                                        onChange={handleChange}
                                    >
                                        <ToggleButton value="ongoing">진행중</ToggleButton>
                                        <ToggleButton value="planning">예정</ToggleButton>
                                        <ToggleButton value="deadline">마감</ToggleButton>
                                        <ToggleButton value="all">전체</ToggleButton>
                                    </ToggleButtonGroup>
                                </ProgressBox>
                                <SelectBox>
                                    페이지 당 :
                                    <Select width={60} onChange={handleChangeRowsPerPage} margin="20px 10px">
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                    </Select>
                                </SelectBox>
                            </ListLengthSelectBox>
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {icoTableColumns && icoTableColumns.map((column) => (
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
                                        {icoList && icoList
                                            .map(list => {
                                                return (
                                                    <TableRow
                                                        hover
                                                        tabIndex={-1}
                                                        key={list.id}
                                                        onClick={() => console.info('뷰 페이지로 이동. ')}
                                                        style={{cursor: 'pointer'}}
                                                    >
                                                        {icoTableColumns.map((column) => {
                                                            const value = list[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.id === 'ai_recommend'
                                                                        ? <StarGraph value={value}/>
                                                                        : column.format && typeof value === 'number' || typeof value === 'object'
                                                                            ? column.format(value)
                                                                            : value
                                                                    }
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Paging
                                currentPage={currentPage}
                                totalItemsCount={icoList && icoList.length}
                                onChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                            />
                        </Paper>
                    </IcoListBox>
                </Wrapper>
                :
                <ColumnTable
                    addIcoState={addIcoState}
                    onIcoChange={onIcoChange}
                    onDateChange={onDateChange}
                />
            }
        </Box>
    )
}

export default IcoPresentation;