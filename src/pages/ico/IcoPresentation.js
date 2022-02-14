import React from 'react';
import styled from "styled-components";
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
import ContentBox from "../../components/share/ContentBox"

const Wrapper = styled.div`
  padding: 20px;
`;
const ListLengthSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 0 30px;
`;
const StyledToggleButton = styled(ToggleButton)`
  height: 35px;
  border-radius: 0 !important;
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
const IcoListBox = styled.div`
  margin: 0 auto;
`;
const PagingBox = styled.div`
  width: 500px;
  margin: 80px auto 20px;
`;
const ButtonGroup = styled.div`
  text-align: center;
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
        <ContentBox>
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
                                <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <StyledToggleButton value="ongoing">진행중</StyledToggleButton>
                                    <StyledToggleButton value="planning">예정</StyledToggleButton>
                                    <StyledToggleButton value="deadline">마감</StyledToggleButton>
                                    <StyledToggleButton value="all">전체</StyledToggleButton>
                                </ToggleButtonGroup>
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
                            height={38}
                            border={`1px solid ${colors.darkBlueColor}`}
                            fontColor={colors.darkBlueColor}
                            bgColor={colors.whiteColor}
                            title="취소"
                            onClick={onCancel}
                        />
                        <Button
                            width={120}
                            height={38}
                            bgColor={colors.darkBlueColor}
                            fontColor={colors.whiteColor}
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

export default IcoPresentation;