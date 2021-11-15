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
const ButtonGroup = styled.div`
  text-align: right;
  margin: 50px 0 200px;
`;
const TopButtonGroup = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 50px;
`;

const IcoInfoUpdatePresentation = ({
                                       tabMenu,
                                       handleTabMenu,
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
                tabList={["ICO 수정"]}
            />
            <Wrapper>
                <TopButtonGroup>
                    <Button
                        title="이전"
                        width={60}
                        height={40}
                        border={`1px solid ${colors.activeBlue}`}
                        fontColor={colors.activeBlue}
                        bgColor={colors.whiteColor}
                        fontSize={16}
                        // onClick={goBack}
                    />
                    <Button
                        title="회원정보 수정"
                        width={140}
                        height={40}
                        fontColor={colors.whiteColor}
                        bgColor={colors.activeBlue}
                        fontSize={16}
                        // onClick={() => goMemberUpdate()}
                    />
                </TopButtonGroup>
                <ColumnTable
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
        </Box>
    )
}

export default IcoInfoUpdatePresentation;


// IcoInfoUpdatePresentation;