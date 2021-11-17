import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import HeaderContent from "../../components/share/HeaderContent";
import colors from "../../styles/colors";
import Button from "../../components/share/Button";
import Paper from "@mui/material/Paper";
import Paging from "../../components/share/Paging";
import {useHistory} from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IcoInfoColumnTable from "../../components/feature/IcoInfo/IcoInfoColumnTable";
import SearchForm from "../../components/share/SearchForm";
import ListTable from "../../components/share/Table/ListTable";

const Wrapper = styled.div`
  padding: 20px;
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
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;
const ButtonGroup = styled.div`
  text-align: right;
  margin: 50px 0 200px;
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
                             handleAddChips,
                             handleDeleteChips,
                             chipState,
                             onCancel,
                             onSave
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
                    <SearchForm
                        value={searchCoinName}
                        onChange={onCoinNameChange}
                    />

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
                                    <Select width={70} onChange={handleChangeRowsPerPage} margin="20px 10px">
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                    </Select>
                                </SelectBox>
                            </ListLengthSelectBox>
                            <ListTable
                                tableHeadColumns={icoTableColumns}
                                icoList={icoList}
                            />
                            <PagingBox>
                                <Paging
                                    currentPage={currentPage}
                                    totalItemsCount={icoList && icoList.length}
                                    onChange={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                />
                            </PagingBox>
                        </Paper>
                    </IcoListBox>
                </Wrapper>
                :
                <Wrapper>
                    <IcoInfoColumnTable
                        addIcoState={addIcoState}
                        onIcoChange={onIcoChange}
                        onDateChange={onDateChange}
                        handleAddChips={handleAddChips}
                        handleDeleteChips={handleDeleteChips}
                        chipState={chipState}
                    />
                    <ButtonGroup>
                        <Button
                            width={120}
                            height={48}
                            border={`1px solid ${colors.activeBlue}`}
                            fontColor={colors.activeBlue}
                            fontSize={20}
                            title="취소"
                            onClick={onCancel}
                        />
                        <Button
                            width={120}
                            height={50}
                            bgColor={colors.activeBlue}
                            fontColor={colors.whiteColor}
                            fontSize={20}
                            margin="0 0 0 20px"
                            title="저장"
                            onClick={onSave}
                        />
                    </ButtonGroup>
                </Wrapper>
            }
        </Box>
    )
}

export default IcoPresentation;