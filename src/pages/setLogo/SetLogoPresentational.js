import React from 'react';
import styled from "styled-components";
import colors from "../../styles/Colors";
import Box from '@mui/material/Box';
import HeaderContent from '../../components/share/HeaderContent';

const SetLogoPresentational = ({ handleDrawerToggle, onLogout, tabMenu, handleTabMenu }) => {
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
                title="로고 설정"
                tabList={["로고 등록", "로고 수정"]}
            />
            로고설정
        </Box>
    )
}

export default SetLogoPresentational;