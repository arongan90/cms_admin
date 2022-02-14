import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import HeaderContent from "../../components/share/HeaderContent";
import colors from "../../styles/colors";
import Button from "../../components/share/Button";
import IcoInfoColumnTable from "../../components/feature/IcoInfo/IcoInfoColumnTable";
// import Paper from "@mui/material/Paper";
// import TableContainer from "@mui/material/TableContainer";
// import Table from "@mui/material/Table";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import TableCell from "@mui/material/TableCell";
// import TableBody from "@mui/material/TableBody";
// import Paging from "../../components/share/Paging";
// import {useHistory} from "react-router-dom";
// import StarGraph from "../../components/feature/IcoInfo/StarGraph";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 200px;
`;
const TopButtonGroup = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 50px;
`;

const IcoUpdatePresentation = ({
                                       tabMenu,
                                       handleTabMenu,
                                       // ICO 추가
                                       updateIcoState,
                                       onIcoChange,
                                       onDateChange,
                                       handleAddChips,
                                       handleDeleteChips,
                                       chipState,
                                       onDelete,
                                       onSave,
                                       goBack,
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
                {/*<TopButtonGroup>
                    <Button
                        title="이전"
                        width={60}
                        height={40}
                        border={`1px solid ${colors.activeBlue}`}
                        fontColor={colors.activeBlue}
                        bgColor={colors.whiteColor}
                        fontSize={16}
                        onClick={goBack}
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
                </TopButtonGroup>*/}
                <IcoInfoColumnTable
                    addIcoState={updateIcoState}
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
                        border={`1px solid ${colors.activeRed}`}
                        bgColor={colors.whiteColor}
                        fontColor={colors.activeRed}
                        title="삭제"
                        onClick={onDelete}
                    />
                    <div>
                        <Button
                            title="취소"
                            width={120}
                            height={38}
                            border={`1px solid ${colors.darkBlueColor}`}
                            bgColor={colors.whiteColor}
                            fontColor={colors.darkBlueColor}
                            onClick={goBack}
                        />
                        <Button
                            title="저장"
                            width={120}
                            height={38}
                            margin="0 0 0 20px"
                            bgColor={colors.darkBlueColor}
                            fontColor={colors.whiteColor}
                            onClick={onSave}
                        />
                    </div>
                </ButtonGroup>
            </Wrapper>
        </Box>
    )
}

export default IcoUpdatePresentation;
